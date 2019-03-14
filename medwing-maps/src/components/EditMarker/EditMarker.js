import React, { Component } from "react";
import Modal from "../Modal/Modal";

class EditMarker extends Component {
  hideModal = () => {
    this.props.onCloseModal();
  };

  render() {
    const { markerId, show } = this.props;

    return (
      <Modal show={show} handleClose={this.hideModal}>
        <p>Hola</p>
      </Modal>
    );
  }
}

export default EditMarker;
