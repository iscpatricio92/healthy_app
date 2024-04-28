import apiV1 from "../api";
const postLogin = async (payload) => {
  const response = apiV1.auth.login(payload);
  const data = await response;
  return data.json();
};

export const postLogout = async (token) => {
  const response = apiV1.auth.logout(token);
  const data = await response;
  return data.json();
};

export default postLogin;
