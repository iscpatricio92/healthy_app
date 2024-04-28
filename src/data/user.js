import { useNavigate } from "react-router-dom";
import api from "../api";

export const getUserInfo = async (token) => {
  const response = api.user.userInfo(token);
  const data = await response;
  const dataValidated = await checkStatus(data);
  return dataValidated.json();
};

const checkStatus = async (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 401) {
    window.localStorage.removeItem(api.key);
    window.location.href = "/login";
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export default getUserInfo;
