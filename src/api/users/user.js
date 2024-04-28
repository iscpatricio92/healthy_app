import { CONNECTIONS } from "../../constants/config.js";
import { getHeader } from "../base.js";
const { API_HEALTHY } = CONNECTIONS;
const user = {
  userInfo(token) {
    const url = `${API_HEALTHY}/api/auth/profile/`;
    getHeader.headers.authorization = `Bearer ${token}`;
    return fetch(url, getHeader);
  },
};
export default user;
