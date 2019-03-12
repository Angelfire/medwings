import React, { Component } from "react";
import Home from "../../components/Home/Home";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  getMarkers = () => {
    fetch("http://localhost:3001/api/v1/markers/")
      .then(response => response.json())
      .then(markers => this.setState({ markers: markers.data }));
  };

  componentDidMount() {
    this.getMarkers();

    window.eventManager.on("update", this.getMarkers);
  }

  componentWillUnmount() {
    window.eventManager.removeListener("update", this.getMarkers);
  }

  render() {
    const { markers } = this.state;
    return <Home markers={markers} />;
  }
}

export default HomeContainer;
