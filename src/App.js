import React, { Component } from "react";
import "./App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import { Link } from "react-router-dom";

import ChoroplethMap from "./components/ChoroplethMap";
import CustomNavbar from "./components/CustomNavbar";

class App extends Component {
  state = {
    data: [
      ["CH", 75],
      ["DL", 43],
      ["HP", 55],
      ["HR", 88],
      ["JK", 21],
      ["AP", 43],
      ["KL", 21],
      ["LD", 456],
      ["OR", 60],
      ["DN", 46],
      ["KA", 44],
      ["MH", 382],
      ["AN", 67],
      ["AS", 127],
      ["MN", 78],
      ["NL", 100],
      ["ML", 22],
      ["PB", 123],
      ["RJ", 56],
      ["UP", 76],
      ["UT", 8],
      ["JH", 45],
      ["WB", 56],
      ["BR", 34],
      ["SK", 98],
      ["CT", 14],
      ["MP", 77],
      ["PY", 35],
      ["TN", 88],
      ["GJ", 34],
      ["GA", 23],
      ["AR", 200],
      ["MZ", 125],
      ["TR", 66],
      ["DD", 87],
    ],
  };

  render() {
    const options = ["ph", "suplhur", "chlorine"];
    return (
      <Router>
        <Announcement />
        <Navbar />

        <div className="App">
          {/* <div>
            {/* <Link to="/" style={{ fontSize: 25, color: "blue" }}>
              Home
            </Link> */}
          {/* </div>{" "} */}
          {/* */}
          {/* <Link to="/choroplethMap" style={{ fontSize: 25, color: "blue" }}>
            India's water quality heatmap
          </Link> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/choroplethMap"
              element={<ChoroplethMap data={this.state.data} />}
            />
          </Routes>
        </div>
      </Router>

      // <div
      //   style={{
      //     height: "100vh",
      //     width: "100vw",
      //   }}
      // >

      //     <ChoroplethMap data={this.state.data} />
      //  </div>
    );
  }
}

export default App;
