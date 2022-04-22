import { Button, Form, Row } from 'react-bootstrap';
import './_style.css';
import { Component, useContext } from 'react';
import linkState from 'linkstate';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context';

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  constructor(props) {
    super(props);

    console.log(...arguments)

    this.navigate = props.navigate;
    this.userService = props.context.userService;
  }

  async login(e) {
    e.preventDefault();

    await this.userService.login(this.state.username, this.state.password);
    await this.userService.getUserData();

    this.navigate("/bookings");
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

export default function LoginWrapper(props) {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  return <Login {...props} navigate={navigate} context={context} />;
}
