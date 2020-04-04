import React from "react";
import { Component } from "react";

export class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
    this.enter = this.enter.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addNewTaskToList = this.addNewTaskToList.bind(this);
  }

  addNewTaskToList(){
    this.props.addNewTask(this.state.newTask);
  }

  updateTask(event) {
    this.setState({
      newTask: event.target.value
    });
    console.log(this.state.newTask);
  }

  enter(event) {
    this.setState({
      nameUser: event.target.value
    });
    console.log("enter yes", this.state);
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.newTask} onChange={this.updateTask} type="text" />
        </form>
        <button onClick={this.enter}>Enter</button>
      </div>
    );
  }
}
export default AddTask;