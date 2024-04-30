import React, { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const fetchProfileData = async () => {
    const data = await axios.get("https://api.github.com/users/officialcody");
    setProfileData(data?.data);
  };
  useEffect(() => {
    fetchProfileData();
  }, []);
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
