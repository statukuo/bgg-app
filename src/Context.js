import React from "react";
import BookingService from "./services/bookingService";
import TableService from "./services/tableService";
import UserService from "./services/userService";

export const AppContext = React.createContext();

class Context extends React.Component {
  state = {
    userService: new UserService(),
    bookingsService: new BookingService(),
    tablesService: new TableService()
  };

  //Now you can place all of your logic here
  //instead of cluttering your app component
  //using this components state as your context value
  //allows you to easily write funcitons to change
  //your context just using the native setState
  //you can also place functions in your context value
  //to call from anywhere in your app
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default Context;
