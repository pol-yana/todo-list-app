import React from "react";
import { Component } from "react";

export class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:""
    };
    //this.showDateNow = this.showDateNow.bind(this);
  }

  currentDate(){
    this.setState({date:new Date().toLocalDateString()})
  }
 
  render() {
    return (
      <div>
        <p>Date: {this.state.date}</p>
      </div>
    );
  }
}

export default Date;
