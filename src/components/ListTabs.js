import React from "react";
import { Component } from "react";
//import  IncompleteTask from "./IncompleteTask"

export class ListTabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      incompleteStatus:true,
      completeStatus:false,
    };
    this.ListStatus = this.ListStatus.bind(this);
  }

  ListStatus(){
   if (this.state.incompleteStatus===true){this.setState({incompleteStatus:false,
    completeStatus:true})
    }else{this.setState({incompleteStatus:false,
      completeStatus:true})}
  }

  render() {
    return (
      <div className="container">
        <ul className="row">
          <li className="col-6">
            <button onClick={this.ListStatus}>Incomplete Task</button>
          </li>

          <li className="col-6">
            <button onClick={this.ListStatus}>Complete Task</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListTabs;
