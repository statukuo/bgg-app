import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import { Component } from "react";
import Context from "./Context";
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Context>
        <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </Context>
    );
  }
}

export default App;
