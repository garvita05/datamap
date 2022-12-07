import React, { Component } from "react";
import Datamap from "datamaps/dist/datamaps.world.min.js";
import d3 from "d3";
import indiaJson from "./india.topo.json";

class ChoroplethMap extends Component {
  componentDidMount() {
    //console.log("Hello");
    // Datamaps expect data in format:
    // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
    //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
    let dataset = {};

    // We need to colorize every country based on "numberOfWhatever"
    // colors should be uniq for every value.
    // For this purpose we create palette(using min/max this.props.data-value)
    let onlyValues = this.props.data.map(function (obj) {
      return obj[1];
    });
    let minValue = Math.min.apply(null, onlyValues),
      maxValue = Math.max.apply(null, onlyValues);

    // create color palette function
    // color can be whatever you wish
    let paletteScale = d3.scale
      .linear()
      .domain([minValue, maxValue])
      .range(["#EFEFFF", "#02386F"]); // blue color

    // fill dataset in appropriate format
    this.props.data.forEach(function (item) {
      //
      // item example value ["USA", 70]
      let iso = item[0],
        value = item[1];
      dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
    });

    function showData(geo, data) {
      // don't show tooltip if country don't present in dataset
      //console.log(geo.properties.name);
      if (!data) {
        return;
      }
      // tooltip content
      //showData(geo.propertis.name);
      //console.log(geo.properties.name);
      // var buffer = fetch("http://localhost:5000/city", {
      //   city: geo.properties.name,
      // })
      //   .exec()
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log("Error" + err);
      //   });
      return [
        '<div class="hoverinfo">',
        "<strong>",
        geo.properties.name,
        "</strong>",
        "<br>PH: <strong>",
        data.numberOfThings,
        "</strong>",
        "</div>",
      ].join("");
    }

    let map = new Datamap({
      element: document.getElementById("cloropleth_map"),
      scope: "india",
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: "#444",
        highlightBorderWidth: 1,
        borderWidth: 0.5,
        dataJson: indiaJson,
        popupTemplate: function (geo, data) {
          console.log("hello");
          showData(geo, data);
        },

        // function (geo, data) {
        //   // don't show tooltip if country don't present in dataset
        //   if (!data) {
        //     return;
        //   }
        //   // tooltip content
        //   //showData(geo.propertis.name);
        //   //console.log(geo.properties.name);
        //   // var buffer = fetch("http://localhost:5000/city", {
        //   //   city: geo.properties.name,
        //   // })
        //   //   .exec()
        //   //   .then((data) => {
        //   //     console.log(data);
        //   //   })
        //   //   .catch((err) => {
        //   //     console.log("Error" + err);
        //   //   });
        //   return [
        //     '<div class="hoverinfo">',
        //     "<strong>",
        //     geo.properties.name,
        //     "</strong>",
        //     "<br>PH: <strong>",
        //     data.numberOfThings,
        //     "</strong>",
        //     "</div>",
        //   ].join("");
        // }
      },
      fills: {
        HIGH: "#afafaf",
        LOW: "#123456",
        MEDIUM: "blue",
        UNKNOWN: "rgb(0,0,0)",
        defaultFill: "#eee",
      },
      data: dataset,
      setProjection: function (element) {
        var projection = d3.geo
          .mercator()
          .center([78.9629, 20.5937]) // always in [East Latitude, North Longitude]
          .scale(200)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geo.path().projection(projection);
        return { path: path, projection: projection };
      },
    });
  }

  render() {
    return (
      <div
        id="cloropleth_map"
        style={{
          height: "100vh",
          width: "100vh",
        }}
      ></div>
    );
  }
}

export default ChoroplethMap;
