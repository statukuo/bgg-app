import { Button, Form, Row } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import linkState from 'linkstate';
import { AppContext } from '../../Context';
import { withRouter } from '../../withRouter';
import CustomNavBar from '../../components/NavBar';

class Login extends Component {
  static contextType = AppContext;
  state = {
    username: "",
    password: "",
    error: false
  };

  constructor(props) {
    super(props);
    this.navigate = props.navigate;
  }

  async login(e) {
    e.preventDefault();
    const response = await this.context.userService.login(this.state.username, this.state.password);

    if (response) {
      this.setState({ error: false });
      this.props.navigate("/");
    } else {
      this.setState({ error: true });
    }
  }

  async componentDidMount() {
    await this.context.userService.start();

    if (this.context.userService.isLoggedIn) {
      this.props.navigate("/");
    }
  }

  render() {
    return <div className="page">
      <CustomNavBar />
      <div className="Login">
        <header className="Login-header">
          <Row className="mx-0">
            <Form onSubmit={(e) => this.login(e)}>
              <h3>Sign In</h3>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={linkState(this, 'username')}
                  isInvalid={this.state.error}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={linkState(this, 'password')}
                  isInvalid={this.state.error}
                />
              </Form.Group>
              <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
            </Form>
          </Row>
        </header>
      </div>
    </div>;
  }
}

export default withRouter(Login);
