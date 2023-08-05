import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" />
      <span className="switch" />
    </label>
  );
};

export default ToggleSwitch;
