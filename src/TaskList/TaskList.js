import React from "react";
import classes from "./TaskList.css";

const taskList = props => {
  return (
    <div className={classes.taskContainer}>
      <ul className={classes.taskList}>
        {props.tasks.map((task, idx) => {
          return (
            <li className={classes.taskItem} key={`${task}${idx}`}>
              <p className={classes.text}>{task}</p>
              <a
                href="seznam.cz"
                className={classes.cancelBtn}
                onClick={e => props.deleteTask(e, idx)}
              >
                X
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default taskList;
