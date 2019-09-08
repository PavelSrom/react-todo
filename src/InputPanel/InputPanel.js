import React from "react";
import classes from "./InputPanel.css";

const inputPanel = props => (
  <div className={classes.inputPanelContainer}>
    <input
      type="text"
      className={classes.input}
      placeholder="Enter your task..."
      onChange={props.setInput}
      value={props.inputValue}
    />
    <button className={classes.submitBtn} onClick={props.submitTask}>
      ADD TASK
    </button>
  </div>
);

export default inputPanel;
