import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

class MedwingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        item
        xs={12}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 52.5170028, lng: 13.4039783 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Changing Colors Garage"}
          position={{ lat: 39.648209, lng: -75.711185 }}
          name={"Changing Colors Garage"}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE"
})(MedwingMap);
