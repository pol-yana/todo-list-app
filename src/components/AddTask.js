import React from "react";
import { Component } from "react";

export class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.sendTaskToIncompleteTask = this.sendTaskToIncompleteTask.bind(this);
  }

  sendTaskToIncompleteTask(){
    this.props.callbackNewTask(this.state.newTask);
  }

  updateTask(event) {
    this.setState({
      newTask: event.target.value
    });
    console.log(this.state.newTask);
  }

  addNewTask(event) {
    this.sendTaskToIncompleteTask();
    console.log("addNewTask yes", this.state);
    this.setState({
      newTask: ""
    });
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.newTask} onChange={this.updateTask}  />
        </form>
        <button onClick={this.addNewTask}>ADD</button>
      </div>
    );
  }
}
export default AddTask;