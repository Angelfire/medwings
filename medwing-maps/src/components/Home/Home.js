import React, { Component } from "react";
//import MapContainer from "../MapContainer/MapContainer";
import ShowMarkers from "../ShowMarkers/ShowMarkers";
import CreateMarker from "../CreateMarker/CreateMarker";

import "./Home.css";

class Home extends Component {
  render() {
    const { markers } = this.props;

    return (
      <div className="home">
        <div>Aca va a el mapa</div>
        <div className="full-markers">
          <CreateMarker />
          <ShowMarkers data={markers} />
        </div>
      </div>
    );
  }
}

export default Home;
