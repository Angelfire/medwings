import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

class MedwingMap extends Component {
  render() {
    const { data, google } = this.props;

    const markers = data.map(marker => (
      <Marker
        title={marker.title}
        position={{ lat: marker.lat, lng: marker.lng }}
        name={marker.title}
        key={marker.id}
      />
    ));

    return (
      <Map
        item
        xs={12}
        google={google}
        zoom={14}
        initialCenter={{ lat: 52.5170028, lng: 13.4039783 }}
      >
        {markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE"
})(MedwingMap);
