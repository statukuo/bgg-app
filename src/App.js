import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import { AppContext } from "./Context";
import Login from "./pages/login";
import User from "./pages/user";
import ChangePassword from "./pages/change_password";
import RequireAuth from "./components/RequireAuth";
import Bookings from "./pages/bookings";
class App extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/bookings" element={<RequireAuth>
            <Bookings />
          </RequireAuth>}
          />
          <Route path="/user" element={<RequireAuth>
            <User />
          </RequireAuth>}
          />
          <Route path="/change-password" element={<RequireAuth>
            <ChangePassword />
          </RequireAuth>}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
