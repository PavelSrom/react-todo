import React, { Component } from "react";
import "./App.css";
import InputPanel from "./InputPanel/InputPanel";
import TaskList from "./TaskList/TaskList";
import Logo from "./ReactLogo.png";
import classes from "./App.css";

class App extends Component {
  state = {
    userInput: "",
    taskList: []
  };

  setInput = e => {
    this.setState({ userInput: e.target.value });
  };
  submitTask = () => {
    const userInput = this.state.userInput;
    userInput === ""
      ? alert("Enter a task!")
      : this.setState(prevState => {
          let tasks = prevState.taskList;
          tasks.push(userInput);
          return {
            userInput: "",
            taskList: tasks
          };
        });
  };
  deleteTask = (e, id) => {
    e.preventDefault();
    setTimeout(() => {
      this.setState(prevState => {
        let updatedTasks = prevState.taskList.filter((_, index) => {
          return index !== id;
        });
        return {
          taskList: updatedTasks
        };
      });
    }, 100);
  };

  render() {
    const headingStyle = {
      fontSize: 24,
      color: "deepskyblue",
      textTransform: "uppercase",
      textAlign: "center",
      marginTop: 20
    };

    return (
      <div>
        <h1 style={headingStyle}>My first React app</h1>
        <img
          src={Logo}
          style={{ maxWidth: 64, display: "block", margin: "0 auto" }}
          alt="React logo"
          className={classes.Logo}
        />
        <InputPanel
          setInput={e => this.setInput(e)}
          submitTask={this.submitTask}
          inputValue={this.state.userInput}
        />
        <TaskList tasks={this.state.taskList} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
