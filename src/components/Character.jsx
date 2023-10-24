import React, { Component } from "react";
class Character extends Component {
  state = {};
  render() {
    return <p>{this.props.character}</p>;
  }
}

export default Character;
