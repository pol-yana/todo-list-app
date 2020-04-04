import React from "react";
import { Component } from "react";
import AddTask from "./AddTask";


export class IncomleteTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.arrayOfList=this.arrayOfList.bind(this)
    this.showTaskFromAddTask=this.showTaskFromAddTask(this)
    console.log(props);
  }

  showTaskFromAddTask(task){
    console.log("Task: ", task)
  }

  arrayOfList(task) {
    this.setState(state => ({ list: state.list.concat([task]) }));
    console.log("List: ", this.state.list);
  }

  render() {
    return (
      <div>
        <div>
          <AddTask  addNewTaskToList={this.showTaskFromAddTask} />
        </div>
        <div>
          <ul>
            {this.state.list.map(task => {
              return <li> {task}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default IncomleteTask;
