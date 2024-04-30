import React from "react";
import useGitApi from "../utils/useGitApi";
const Profile = () => {
  const profileData = useGitApi("officialcody");
  const { name, avatar_url } = profileData;
  return (
    <div>
      <h5>Name: {name}</h5>
      <h3>
        <img src={avatar_url} alt="abg" />
      </h3>
    </div>
  );
};

export default Profile;
