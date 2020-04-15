import React from "react";
import { Component } from "react";
import AddTask from "./AddTask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export class IncomleteTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      completeTask:""
    };
    this.arrayOfList = this.arrayOfList.bind(this);
    this.showTaskFromAddTask = this.showTaskFromAddTask.bind(this);
    this.sendTaskToCompleteTask = this.sendTaskToCompleteTask.bind(this);
    this.markCompleteTask = this.markCompleteTask.bind(this)
    console.log(props);
  }

  sendTaskToCompleteTask() {
    this.props.callbackCompleteTask(this.state.completeTask);
  }

  showTaskFromAddTask(task) {
    console.log("Task: ", task);
    this.arrayOfList(task);
  }

  arrayOfList(task) {
    this.setState((state) => ({ list: state.list.concat([task]) }));
    console.log("List: ", this.state.list);
  }

  markCompleteTask(event){
    this.setState({
      completeTask: event.target.value
    });
    this.sendTaskToCompleteTask();
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
                    <button onClick={this.markCompleteTask}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </button>{" "}
                    {task}
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
