import { Table } from 'react-bootstrap';
import './_style.css';
import { Component } from 'react';
import { AppContext } from '../../Context';
import { map }from 'lodash';

class User extends Component {
  static contextType = AppContext;
  state = {
    userData: null
  }

  async componentDidMount() {
    const userData = await this.context.userService.getUserData();

    this.setState({userData});
  }

  renderTableValues(data) {
    if (!data) {
      return null;
    }

    return map(data, (value, key) => {
      return <tr>
        <td>
          {key}
        </td>
        <td>
          {value}
        </td>
      </tr>;
    });
  }

  renderKeyValue(key, value) {
    return <tr>
      <td>{key}</td>
      <td>{value}</td>
    </tr>
  }

  render() {
    return <div className="User">
      <header className="User-header">
      <Table striped bordered hover variant="light">
        <tbody>
          {this.renderTableValues(this.state.userData)}
        </tbody>
      </Table>
      </header>
    </div>;
  }
}

export default User;
