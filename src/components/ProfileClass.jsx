import React, { Component } from "react";
import axios from "axios";

export default class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  async componentDidMount() {
    const data = await axios.get("https://api.github.com/users/officialcody");
    console.log(data);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will unmount");
  }
  render() {
    return <div>ProfileClass</div>;
  }
}
