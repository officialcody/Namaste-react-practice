import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sparsh",
    email: "sparsh@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
