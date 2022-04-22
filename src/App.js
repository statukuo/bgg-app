import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/landing";
import { Component, useContext } from "react";
import Login from "./pages/login";
import { AppContext } from "./Context";

class App extends Component {
  constructor(props) {
    super(props);

    this.userService = props.context.userService;
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/bookings" element={!this.userService.loggedIn ? <Navigate to="/" /> : <Landing />}/>
        </Routes>
      </div>
    );
  }
}

export default function AppWrapper(props) {
  const context = useContext(AppContext);

  return <App {...props} context={context} />;
}
