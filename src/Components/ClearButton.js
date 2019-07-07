import React from "react";
import "../Styles/ClearButton.css";

export const ClearButton = props => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;