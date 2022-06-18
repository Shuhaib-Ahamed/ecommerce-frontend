import jwt from "jsonwebtoken";

export const authValidator = () => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token);
      if (decodedToken == null) {
        localStorage.removeItem("token");
        return false;
      } else if (
        new Date(decodedToken.exp).toISOString() > new Date().toISOString()
      ) {
        localStorage.removeItem("token");
        return false;
      } else {
        return true;
      }
    }
  }
};
