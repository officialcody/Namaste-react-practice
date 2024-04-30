import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }
  componentDidMount() {
    console.log("About ComponentDidMount");
  }
  render() {
    console.log("About render");
    return (
      <div>
        <h1>About</h1>
        <User />
        <UserClass />
        <ProfileClass />
      </div>
    );
  }
}

export default About;
