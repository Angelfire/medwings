import React, { Component } from "react";
import Home from "../../components/Home/Home";
import axios from "axios";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  getMarkers = async () => {
    let response = await axios.get("http://localhost:3001/api/v1/markers/");
    let { data } = await response.data;
    this.setState({ markers: data });
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
