import React, { Component } from "react";
import MedwingMap from "../MedwingMap/MedwingMap";
import ShowMarkers from "../ShowMarkers/ShowMarkers";
import CreateMarker from "../CreateMarker/CreateMarker";
import axios from "axios";

import "./Home.css";

class Home extends Component {
  handleEdit = id => {
    console.log(id);
  };

  componentDidMount() {
    window.eventManager.on("update", this.handleDelete);
  }

  componentWillUnmount() {
    window.eventManager.removeListener("update", this.handleDelete);
  }

  handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/markers/${id}`);

      window.eventManager.emit("update");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { markers } = this.props;

    return (
      <div className="home">
        <MedwingMap />
        <div className="full-markers">
          <CreateMarker />
          <ShowMarkers
            data={markers}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default Home;
