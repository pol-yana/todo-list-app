import React from "react";
import { Component } from "react";
import  IncompleteTask from "./IncompleteTask"

export class ListTabs extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.incompleteListStatus = this.incompleteListStatus.bind(this);
    this.completeListStatus = this.completeListStatus.bind(this);
  }

  incompleteListStatus(){
    return (<IncompleteTask/>);
  }

  completeListStatus(){

  }

  render() {
    return (
      <div className="container">
        <ul className="row">
          <li className="col-6">
            <button onClick={this.incompleteListStatus}>Incomplete Task</button>
          </li>

          <li className="col-6">
            <button onClick={this.completeListStatus}>Complete Task</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListTabs;
