//import ReactDOM from "react-dom";
import React from "react";
import { Component } from "react";
import IncomleteTask from "./IncompleteTask";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export class ShowIncomleteTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    console.log("showIncompleteTask", this.state);
  }

  render() {
    return <IncomleteTask list={this.state.list} />;
  }
}

export default ShowIncomleteTask;
