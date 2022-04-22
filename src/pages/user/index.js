import { Button, Form } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import CustomNavBar from '../../components/NavBar';
import linkState from 'linkstate';

class User extends Component {
  static contextType = AppContext;
  state = {
    userData: {},
    edit: false
  }

  async componentDidMount() {
    const userData = await this.context.userService.getUserData();

    this.setState({ userData });
  }

  async update(e) {
    e.preventDefault();

    console.log(this.state.userData);
  }

  switchEdit() {
    const currentEditState = this.state.edit;
    this.setState({edit: !currentEditState});
  }

  renderButtons() {
    if(!this.state.edit) {
      return <Button onClick={() => this.switchEdit()} className="btn btn-primary btn-block">Edit</Button>
    }

    return <Button onClick={() => this.update()} variant="success" className="btn btn-primary btn-block">Update</Button>;
  }

  renderData(data) {
    return <Form onSubmit={(e) => this.update(e)}>
    <h3>Sign In</h3>
    <div className="form-group">
      <label>Id</label>
      <input type="text" className="form-control" value={data.id} onInput={linkState(this, 'userData.id')} disabled/>
    </div>
    <div className="form-group">
      <label>Username</label>
      <input type="text" className="form-control" value={data.username} onInput={linkState(this, 'userData.username')} disabled={!this.state.edit}/>
    </div>
    {this.renderPassword()}
    {this.renderButtons()}
  </Form>
  }

  render() {
    return <div className="page">
      <CustomNavBar />
      <div className="User">
        <header className="User-header">
          {this.renderData(this.state.userData)}
        </header>
      </div>
    </div>;
  }
}

export default User;
