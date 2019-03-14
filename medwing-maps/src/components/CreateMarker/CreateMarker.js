import React, { Component, Fragment } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import InputField from "./InputField";
import germanCoordinates from "../../utils/address-utils";

import "./CreateMarker.css";

class CreateMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      lat: "",
      lng: "",
      title: ""
    };
  }

  showModal = () => {
    this.setState({ openModal: true });
  };

  hideModal = () => {
    this.setState({ openModal: false });
  };

  changeHandler = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  formSubmitHandler = async () => {
    const { title, lat, lng } = this.state;

    const validCoordinates = await germanCoordinates(lat, lng);

    if (validCoordinates) {
      try {
        await axios.post("http://localhost:3001/api/v1/markers/", {
          title,
          lat,
          lng
        });

        window.eventManager.emit("update");

        this.setState({ openModal: false });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Coordinates are not valid within Germany");
    }
  };

  render() {
    const { openModal, title, lat, lng } = this.state;
    const isEnabled =
      title !== "" && lat !== "" && lng !== "" ? "enabled" : "disabled";

    return (
      <Fragment>
        <button className="contentmodal-button" onClick={this.showModal}>
          Create Marker
        </button>
        <Modal show={openModal} handleClose={this.hideModal}>
          <div className="contentmodal">
            <form className="contentmodal-form">
              <h2 className="contentmodal-title">Create New Marker</h2>
              <InputField
                name="title"
                placeholder="Title"
                onChange={this.changeHandler}
              />
              <InputField
                name="lat"
                placeholder="Latitude"
                onChange={this.changeHandler}
              />
              <InputField
                name="lng"
                placeholder="Longitude"
                onChange={this.changeHandler}
              />
              <input
                className={`contentmodal-button ${isEnabled}`}
                type="button"
                value="Create Marker"
                onClick={this.formSubmitHandler}
              />
            </form>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default CreateMarker;
