import { Button, Card } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import { map }from 'lodash';
import CustomNavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

class Bookings extends Component {
  static contextType = AppContext;
  state = {
    bookingsData: null
  }

  async componentDidMount() {
    const bookingsData = await this.context.bookingsService.getAll();

    this.setState({bookingsData});
  }

  renderBookings(data) {
    if (!data) {
      return null;
    }

    return map(data, (value, id) => {
      return <Card style={{ width: '18rem' }} key={id}>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{value.author}</Card.Subtitle>
        <Card.Text>{value.description}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>;
    });
  }

  render() {
    return <div className="page">
      <CustomNavBar/>
      <div className="Bookings">
        <header className="Bookings-header">
          {this.renderBookings(this.state.bookingsData)}
          <Link to="/create-booking">
            <Button variant='success'>Create</Button>
          </Link>
        </header>
      </div>
    </div>;
  }
}

export default Bookings;
