import React from "react";
import { Component } from "react";
import ShowIncompleteTask from "./ShowIncompleteTask"
import ShowCompleteTask from "./ShowCompleteTask"

export class ListTabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      //incompleteStatus:true,
      //completeStatus:false,
    };
    //this.ListStatus = this.ListStatus.bind(this);
    this.ShowCompleteTask = this.ShowCompleteTask.bind(this)
    this.ShowIncompleteTask = this.ShowIncompleteTask.bind(this)
    console.log(this.state)
  }

  // ListStatus(){
  // if (this.state.incompleteStatus===true){
  //   this.setState({incompleteStatus:false,
  //   completeStatus:true})
  //   }else{
  //     this.setState({incompleteStatus:false,
  //     completeStatus:true})
  //   }
  // }

  ShowIncompleteTask(){
    console.log('Incompete task')
  }
  
  ShowCompleteTask(){
    console.log('Complete task')
  }

  render() {
    return (
      <div className="container">
        <ul className="row">
          <li className="col-6">
            <button onClick={this.ShowIncompleteTask}>Incomplete Task</button>
          </li>

          <li className="col-6">
            <button onClick={this.ShowCompleteTask}>Complete Task</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListTabs;
