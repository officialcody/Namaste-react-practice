import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto text-center">
        <p className="text-sm text-gray-500 mx-auto sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          Developed by Sparsh Goel
        </p>
      </div>
    </footer>
  );
};
export default Footer;
