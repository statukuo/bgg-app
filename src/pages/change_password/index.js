import { Button, Form } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import CustomNavBar from '../../components/NavBar';
import linkState from 'linkstate';
import { withRouter } from '../../withRouter';

class ChangePassword extends Component {
  static contextType = AppContext;
  state = {
    oldPassword: "",
    newPassword: "",
    repeatedNewPassword: "",
    error: false
  }

  async componentDidMount() {
    const userData = await this.context.userService.getUserData();

    this.setState({ userData });
  }

  async submit(e) {
    e.preventDefault();

    if (this.state.newPassword !== this.state.repeatedNewPassword) {
      this.setState({error: true});

      return;
    }

    const response = await this.context.userService.updatePassword(this.state.newPassword, this.state.repeatedNewPassword, this.state.oldPassword);

    if(response) {
      this.props.navigate("/");
    } else {
      this.setState({error: true});
    }
  }

  render() {
    return <div className="page">
      <CustomNavBar />
      <div className="User">
        <header className="User-header">
          <Form onSubmit={(e) => this.submit(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Old password</Form.Label>
              <Form.Control type="password" placeholder="Old password" isInvalid={this.state.error} onChange={linkState(this, 'oldPassword')}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" isInvalid={this.state.error} onChange={linkState(this, 'newPassword')}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repeat New Password</Form.Label>
              <Form.Control type="password" placeholder="Repeat New Password" isInvalid={this.state.error} onChange={linkState(this, 'repeatedNewPassword')}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </header>
      </div>
    </div >;
  }
}

export default withRouter(ChangePassword);
