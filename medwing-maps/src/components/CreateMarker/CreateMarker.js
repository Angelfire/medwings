import React, { Component, Fragment } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";

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
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  showModal = () => {
    this.setState({ openModal: true });
  };

  hideModal = () => {
    this.setState({ openModal: false });
  };

  changeHandler = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState({ [name]: value });
  };

  async formSubmitHandler() {
    const { title, lat, lng } = this.state;

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
  }

  render() {
    const { openModal } = this.state;

    return (
      <Fragment>
        <button onClick={this.showModal}>Create Marker</button>
        <Modal show={openModal} handleClose={this.hideModal}>
          <form className="contentmodal-form">
            <h2 className="contentmodal-title">Create New Marker</h2>
            <div className="contentmodal-field">
              <label className="contentmodal-label">Title</label>
              <input
                className="contentmodal-input"
                type="text"
                name="title"
                placeholder="Marker Title"
                onChange={this.changeHandler}
              />
            </div>
            <div className="contentmodal-field">
              <label className="contentmodal-label">Latitude</label>
              <input
                className="contentmodal-input"
                type="text"
                name="lat"
                placeholder="Latitude Title"
                onChange={this.changeHandler}
              />
            </div>
            <div className="contentmodal-field">
              <label className="contentmodal-label">Longitude</label>
              <input
                className="contentmodal-input"
                type="text"
                name="lng"
                placeholder="Longitude Title"
                onChange={this.changeHandler}
              />
            </div>
            <input
              type="button"
              value="Create Marker"
              onClick={this.formSubmitHandler}
            />
          </form>
        </Modal>
      </Fragment>
    );
  }
}

export default CreateMarker;