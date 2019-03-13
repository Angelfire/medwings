import React from "react";

import "./ShowMarkers.css";

const Markers = ({ data, onDelete, onEdit }) => {
  const markersChilds = data.map(marker => {
    return (
      <div className="marker" key={`marker-${marker.id}`}>
        <h1>{marker.title}</h1>
        <p>{marker.title}</p>
        <p>Latitude: {marker.lat}</p>
        <p>Longitude: {marker.lng}</p>
        <div className="marker-buttons">
          <button
            onClick={() => onEdit(marker.id)}
            className="marker-button"
            type="button"
          >
            Edit
          </button>{" "}
          or{" "}
          <button
            onClick={() => onDelete(marker.id)}
            className="marker-button"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return <div className="markers">{markersChilds}</div>;
};

export default Markers;
