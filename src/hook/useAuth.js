import { jwtDecode } from "jwt-decode";
import api from "../api/index";
const isTokenValid = () => {
  //TODO find a way for this function to be on the side of the context
  const token = localStorage.getItem(api.key);
  if (token) {
    const decodedToken = jwtDecode(token);
    const expirationDate = new Date(decodedToken.exp * 1000);
    const currentDate = new Date();
    return expirationDate > currentDate;
  }
  return false;
};
const useAuth = () => {
  return isTokenValid() === true ? true : false;
};

export default useAuth;
