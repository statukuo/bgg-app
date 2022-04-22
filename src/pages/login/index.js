import { Button, Form, Row } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import linkState from 'linkstate';
import { AppContext } from '../../Context';
import { withRouter } from '../../withRouter';

class Login extends Component {
  static contextType = AppContext;
  state = {
    username: "",
    password: ""
  };

  constructor(props) {
    super(props);
    this.navigate = props.navigate;
  }

  async login(e) {
    e.preventDefault();
    await this.context.userService.login(this.state.username, this.state.password);

    this.props.navigate("/bookings");
  }

  render() {
    return <div className="Login">
      <header className="Login-header">
        <Row className="mx-0">
          <Form onSubmit={(e) => this.login(e)}>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="Enter username" onInput={linkState(this, 'username')} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onInput={linkState(this, 'password')} />
            </div>
            <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
          </Form>
        </Row>
      </header>
    </div>;
  }
}

export default withRouter(Login);
