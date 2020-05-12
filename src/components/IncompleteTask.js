import React from "react";
import { Component } from "react";
import AddTask from "./AddTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export class IncomleteTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.createArrayOfList = this.createArrayOfList.bind(this);
    this.showTaskFromAddTask = this.showTaskFromAddTask.bind(this);
    this.sendTaskToCompleteTask = this.sendTaskToCompleteTask.bind(this);
    this.markCompleteTask = this.markCompleteTask.bind(this);
    console.log(props);
  }

  sendTaskToCompleteTask() {
    this.props.callbackCompleteTask(this.state.completeTask);
  }

  showTaskFromAddTask(task) {
    this.createArrayOfList(task);
    console.log("Task: ", task);
  }

  createArrayOfList(taskText) {
    let stateList = this.state.list;
    let list = stateList.push({
      id: stateList.length,
      text: taskText,
      complete: false,
    });
    this.setState({ list: stateList });
    console.log("List: ", this.state.list);
  }

  markCompleteTask(id) {
    console.log("mark complete")
    this.state.list.forEach((task)=>{
    if (task.id===id ){
      if(task.complete === false) {
        console.log("id false")
      // this.setState({
      //   complete: true,
      // });
    } else {
      console.log("id true")
        // this.setState({
        //   complete: false,
        // });
    }}})
    console.log("see complete", this.state.list)
  }

  render() {
    return (
      <div>
        <div>
          <AddTask callbackNewTask={this.showTaskFromAddTask} />
        </div>
        <div>
          <ul>
            {this.state.list.map((task) => {
              return (
                <div>
                  <hr />
                  <p>
                    <button onClick={this.markCompleteTask(task.id)}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </button>{" "}
                    {task.text}
                  </p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default IncomleteTask;
