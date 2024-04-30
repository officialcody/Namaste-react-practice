import { useEffect, useState } from "react";
import axios from "axios";
import { GITHUB_USER_API } from "./app.constants";

const useGitApi = (username) => {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await axios.get(GITHUB_USER_API + username);
    setProfileData(data.data);
  };
  return profileData;
};

export default useGitApi;
