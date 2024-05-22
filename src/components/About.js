import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
          {({ user }) => <h4 className="p-10 m-10">{user.name}</h4>}
        </UserContext.Consumer>
        <User />
        <UserClass />
        <Profile />
        <ProfileClass />
      </div>
    );
  }
}

export default About;
