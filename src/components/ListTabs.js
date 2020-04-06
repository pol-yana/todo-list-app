import React from "react";
import { Component } from "react";

export class ListTabs extends Component {
  render() {
    return (
      <div className="container">
        <ul className="row">
          <li className="col-6">
            <div>Complete Task</div>
          </li>

          <li className="col-6">
            <div>Incomplete Task</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListTabs;
