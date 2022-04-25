import { Form, Button } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import CustomNavBar from '../../components/NavBar';
import TimePicker from 'react-bootstrap-time-picker';
import { map } from "lodash";
import linkState from 'linkstate';

class CreateBooking extends Component {
  static contextType = AppContext;
  state = {
    tables: [],
    title: null,
    description: null,
    table: null,
    maxParticipants: null,
    startDate: new Date(),
    startTime: null,
    duration: null
  }

  async componentDidMount() {
    const tables = await this.context.tablesService.getAll();

    this.setState({ tables });
  }

  async createBooking(e) {
    e.preventDefault();

    const currentUser = await this.context.userService.getUserData();
    const startDate = new Date(this.state.startTime);
    startDate.setSeconds(this.state.startTime);

    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + this.state.duration);

    await this.context.bookingsService.createBooking({
      creator: currentUser.id,
      title: this.state.title,
      description: this.state.description,
      table: 1,
      maxParticipants: this.state.maxParticipants,
      startDate,
      endDate,
      attendants: [
        currentUser.id
      ]
    });
  }

  createTableSelect() {
    if (!this.state.tables) {
      return null
    }

    return map(this.state.tables, table => {
      return <option value={table.id}>{table.name}</option>;
    });
  }


  render() {
    return <div className="page">
      <CustomNavBar />
      <div className="Bookings">
        <header className="Bookings-header">
          <Form onSubmit={(e) => this.createBooking(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={linkState(this, "title")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={linkState(this, "description")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Select aria-label="Default select example" onChange={linkState(this, "table")}>
                {this.createTableSelect()}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Max participants</Form.Label>
              <Form.Control
                type="number"
                onChange={linkState(this, "maxParticipants")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start time</Form.Label>
              <Form.Control
                type="date"
                onChange={linkState(this, "startDate")}
              />
              <TimePicker
                step={15}
                onChange={linkState(this, "startTime")}
                value={this.state.startTime}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration (hours)</Form.Label>
              <Form.Control
                type="number"
                onChange={linkState(this, "duration")}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </header>
      </div>
    </div>;
  }
}

export default CreateBooking;
