import React, { Component } from "react";
import axios from "axios";
export class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log("user class constructor");
    this.state = {
      count: 0,
      text: "Hello",
    };
  }
  async componentDidMount() {
    const data = await axios.get("https://api.github.com/users/officialcody");
    console.log(data);
    // console.log("user class componentdidmount");
  }
  render() {
    console.log("user class render");
    return (
      <div>
        <button
          onClick={() =>
            this.setState(
              {
                count: this.state.count + 1,
              },
              () => {
                console.log(this.state.text, " ", this.state.count, " ");
              }
            )
          }
        >
          Increase
        </button>
        <h2>Counter: {this.state.count}</h2>
        <h3>Text: {this.state.text}</h3>
      </div>
    );
  }
}

export default UserClass;
