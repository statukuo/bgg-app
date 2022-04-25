import { Button } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import CustomNavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

class User extends Component {
  static contextType = AppContext;
  state = {
    userData: {}
  }

  async componentDidMount() {
    const userData = await this.context.userService.getUserData();

    this.setState({ userData });
  }

  render() {
    return <div className="page">
      <CustomNavBar />
      <div className="User">
        <header className="User-header">
          <div className="col-6">
            <h6>Email</h6>
            <p className="text-muted">{this.state.userData.email || "nothing"}</p>
          </div>
          <div className="col-6">
            <h6>Username</h6>
            <p className="text-muted">{this.state.userData.username}</p>
          </div>
          <Link to="/change-password">
            <Button variant="primary">Change password</Button>
          </Link>
        </header>
      </div>
    </div >;
  }
}

export default User;
