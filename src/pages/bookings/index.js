import { Button } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import CustomNavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing, GroupingState, IntegratedGrouping } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, Appointments, Toolbar, DateNavigator, TodayButton, AppointmentTooltip, AppointmentForm, ConfirmationDialog, Resources, DragDropProvider, GroupingPanel, } from '@devexpress/dx-react-scheduler-material-ui';
import BookingLayout from './booking_layout';

const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  } return <AppointmentForm.TextEditor {...props} />;
};

const BooleanEditor = props => {
  return null;
};


class Bookings extends Component {
  static contextType = AppContext;
  state = {
    bookingsData: [],
    currentDate: new Date(),
    resources: [],
    currentUser: null
  }

  async componentDidMount() {
    const currentUser = await this.context.userService.getUserData();
    const bookingsData = await this.updateBookings();
    const tables = await this.context.tablesService.getAll();

    this.setState({
      bookingsData,
      currentUser,
      resources: [{
        fieldName: 'tableId',
        title: 'Table',
        instances: tables.map(table => {
          return {
            id: table.id,
            text: table.name
          }
        }),
      }]
    });
  }

  async updateBookings(force) {
    return (await this.context.bookingsService.getAll(force)).map(booking => {
      return {
        id: booking.id,
        creator: booking.creator,
        title: booking.title,
        startDate: new Date(booking.start_date),
        endDate: new Date(booking.end_date),
        maxParticipants: booking.max_participants,
        description: booking.description,
        tableId: booking.table
      }
    });
  }

  currentDateChange(currentDate) {
    this.setState({ currentDate });
  }

  async commitChanges(e) {
    if (e.added) {
      await this.context.bookingsService.createBooking({
        creator: this.state.currentUser.id,
        title: e.added.title,
        description: e.added.description,
        table: e.added.tableId,
        maxParticipants: e.added.maxParticipants,
        startDate: e.added.startDate,
        endDate: e.added.endDate,
        attendants: [
          this.state.currentUser.id
        ]
      });
    }
    if (e.changed) {
      const bookingId = Object.keys(e.changed)[0];
      const bookingOwner = this.state.bookingsData.find(booking => parseInt(booking.id) === parseInt(bookingId)).creator;
      if (bookingOwner === this.state.currentUser.id) {
        const booking = e.changed[bookingId];
        await this.context.bookingsService.updateBooking(bookingId,
          {
            title: booking.title,
            description: booking.description,
            table: booking.tableId,
            maxParticipants: booking.maxParticipants,
            startDate: booking.startDate,
            endDate: booking.endDate
        });
      }
    }
    if (e.deleted) {
      const bookingOwner = this.state.bookingsData.find(booking => parseInt(booking.id) === parseInt(e.deleted)).creator;
      if (bookingOwner === this.state.currentUser.id) {
        await this.context.bookingsService.deleteBooking(e.deleted);
      }
    }

    const bookingsData = await this.updateBookings(true);
    this.setState({bookingsData})
  }

  render() {
    if (!this.state.resources.length) {
      return null;
    }

    return <div className="page">
      <CustomNavBar />
      <div className="Bookings">
        <header className="Bookings-header">
          <Paper>
            <Scheduler
              data={this.state.bookingsData}
            >
              <ViewState
                currentDate={this.state.currentDate}
                onCurrentDateChange={(e) => this.currentDateChange(e)}
              />
              <GroupingState
                grouping={[{
                  resourceName: 'tableId',
                }]}
                groupOrientation={() => "Vertical"}
              />
              <DayView
                startDayHour={8}
                endDayHour={24}
              />

              <Toolbar />
              <DateNavigator />
              <TodayButton />

              <EditingState
                onCommitChanges={(e) => this.commitChanges(e)}
              />
              <IntegratedEditing />
              <Appointments />
              <AppointmentTooltip
                showCloseButton
                showOpenButton
              />
              <ConfirmationDialog />
              <AppointmentForm
                basicLayoutComponent={BookingLayout}
                textEditorComponent={TextEditor}
                booleanEditorComponent={BooleanEditor}
              />
              <Resources
                data={this.state.resources}
                mainResourceName="tableId"
              />
              <IntegratedGrouping />
              <DragDropProvider />
              <GroupingPanel />
            </Scheduler>
          </Paper>
          <Link to="/create-booking">
            <Button variant='success'>Create</Button>
          </Link>
        </header>
      </div>
    </div>;
  }
}

export default Bookings;
