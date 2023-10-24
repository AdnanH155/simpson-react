import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Button from "./components/Button";
import Controls from "./components/Controls";

class App extends Component {
  state = { simpsons: [] };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      this.setState({ simpsons: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }
  componentDidUpdate() {
    console.log("state change detected");
  }
  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <h1>The simpsons quote generator</h1>
        </div>
        <div>
          <input type="text" placeholder="search"></input>
        </div>
        {this.state.simpsons.map((item) => {
          return <Characters {...item} />;
        })}
      </>
    );
  }
}

export default App;
