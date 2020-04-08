import React from "react";
import { Component } from "react";
import IncompleteTask from "./IncompleteTask";

export class ComleteTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.arrayOfList = this.arrayOfList.bind(this);
    this.showCompleteTaskFromListOfTask = this.showCompleteTaskFromListOfTask.bind(
      this
    );
    console.log(props);
  }

  showCompleteTaskFromListOfTask(task) {
    console.log("Cmplete Task: ", task);
    this.arrayOfList(task);
  }

  arrayOfList(task) {
    this.setState((state) => ({ list: state.list.concat([task]) }));
    console.log("List: ", this.state.list);
  }

  render() {
    return (
      <div>
        <div>
          <IncompleteTask callbackCompleteTask={this.showCompleteTaskFromListOfTask} />
        </div>
        <div>
          <ul>
            {this.state.list.map((task) => {
              return (
                <div>
                  <hr />
                  <p>
                    <button>
                      <img src="./images/ok2.png" alt="ok" />
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

export default ComleteTask;
