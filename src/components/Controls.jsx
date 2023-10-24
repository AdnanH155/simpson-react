import React, { Component } from "react";
import Button from "./Button";
class Controls extends Component {
  state = {};
  render() {
    return (
      <>
        <Button text={"delete"} /> <Button text={"like"} />
      </>
    );
  }
}

export default Controls;
