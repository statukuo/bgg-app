import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import { AppContext } from "./Context";
import Landing from "./pages/landing";
import Login from "./pages/login";
import User from "./pages/user";
import RequireAuth from "./components/RequireAuth";

class App extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/bookings" element={<RequireAuth>
            <Landing />
          </RequireAuth>}
          />
          <Route path="/user" element={<RequireAuth>
            <User />
          </RequireAuth>}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
