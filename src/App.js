import React, { Component } from "react";
import "./App.css";

import ChoroplethMap from "./components/ChoroplethMap";

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
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <ChoroplethMap data={this.state.data} />
      </div>
    );
  }
}

export default App;
