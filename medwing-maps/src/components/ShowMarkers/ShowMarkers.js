import React, { Component } from "react";

import "./ShowMarkers.css";

class Markers extends Component {
  render() {
    const { data } = this.props;

    const markersChilds = data.map((marker, i) => {
      return (
        <div className="marker" key={`marker-${i}`}>
          <h1>{marker.title}</h1>
          <p>{marker.title}</p>
          <p>Latitude: {marker.lat}</p>
          <p>Longitude: {marker.lng}</p>
        </div>
      );
    });

    return <div className="markers">{markersChilds}</div>;
  }
}

export default Markers;
