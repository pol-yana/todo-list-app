import React from "react";
import { Component } from "react";

export class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateNow: "new Date()"
    };
  }

  render() {
    return (
      <div>
        <p>Date:{this.props.dateNow}</p>
      </div>
    );
  }
}

export default Date;
