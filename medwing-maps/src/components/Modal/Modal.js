import React from "react";
import PropTypes from "prop-types";

import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClass = show ? "isOpen" : "isClosed";

  return (
    <div className={`Modal ${showHideClass}`}>
      <section className="Modal-main">
        <button className="Modal-close" onClick={handleClose}>
          X
        </button>
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.element
};

export default Modal;
