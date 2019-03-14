import React, { Component } from "react";
import axios from "axios";
import MedwingMap from "../MedwingMap/MedwingMap";
import ShowMarkers from "../ShowMarkers/ShowMarkers";
import CreateMarker from "../CreateMarker/CreateMarker";
import EditMarker from "../EditMarker/EditMarker";

import "./Home.css";

class Home extends Component {
  state = {
    markerId: "",
    openModal: false
  };

  componentDidMount() {
    window.eventManager.on("update", this.handleDelete);
  }

  componentWillUnmount() {
    window.eventManager.removeListener("update", this.handleDelete);
  }

  handleEdit = id => {
    this.setState({ markerId: id, openModal: true });
  };

  handleClose = () => this.setState({ openModal: false });

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
    const { markerId, openModal } = this.state;

    return (
      <div className="home">
        <MedwingMap data={markers} />
        <div className="full-markers">
          <CreateMarker />
          <ShowMarkers
            data={markers}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
          {markerId && (
            <EditMarker
              markerId={markerId}
              onCloseModal={this.handleClose}
              show={openModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
