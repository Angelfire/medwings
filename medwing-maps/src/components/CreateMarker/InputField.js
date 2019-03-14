import React from "react";
import PropTypes from "prop-types";

const InputField = ({ name, placeholder, onChange }) => {
  return (
    <div className="contentmodal-field">
      <label className="contentmodal-label">{placeholder}</label>
      <input
        className="contentmodal-input"
        type="text"
        name={name}
        placeholder={`Marker ${placeholder}`}
        onChange={e => onChange(e)}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default InputField;
