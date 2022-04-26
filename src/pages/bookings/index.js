import { Button } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import CustomNavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, Appointments, Toolbar, DateNavigator, TodayButton } from '@devexpress/dx-react-scheduler-material-ui';
import moment from 'moment';

class Bookings extends Component {
  static contextType = AppContext;
  state = {
    bookingsData: [],
    currentDate: new Date()
  }

  async componentDidMount() {
    const bookingsData = (await this.context.bookingsService.getAll()).map(booking=> {
      return {
        title: booking.title,
        startDate: moment(booking.start_date).format('YYYY-MM-DDTHH:mm:ss'),
        endDate: moment(booking.end_date).format('YYYY-MM-DDTHH:mm:ss')
      }
    });
    this.tables = await this.context.tablesService.getAll();

    console.log(bookingsData);

    this.setState({bookingsData});
  }

  currentDateChange(currentDate) {
    this.setState({ currentDate });
  }

  render() {
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
              <DayView
                startDayHour={0}
                endDayHour={24}
              />
              <Toolbar />
              <DateNavigator />
              <TodayButton />
              <Appointments />
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
