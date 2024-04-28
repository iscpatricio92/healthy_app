import api from "../api";

export const getUserInfo = async (token) => {
  const response = api.user.userInfo(token);
  const data = await response;
  return data.json();
};

export default getUserInfo;
