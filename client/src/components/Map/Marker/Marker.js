import React from "react";
import "./Marker.css";

const Marker = (props) => {
  return (
    <div className="marker">
      {props.text}
    </div>
  )
}

export default Marker;
