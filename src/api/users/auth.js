import { CONNECTIONS } from "../../constants/config.js";
import { postHeader } from "../base";
const { API_HEALTHY, PREFIX } = CONNECTIONS;
const auth = {
  login(data) {
    const url = `${API_HEALTHY}${PREFIX}/auth/login`;
    //postHeader.headers.authorization = token;
    postHeader.body = JSON.stringify(data);
    return fetch(url, postHeader);
  },

  logout(token) {
    const url = `${API_HEALTHY}${PREFIX}/auth/logout`;
    postHeader.headers.authorization = token;
    //postHeader.body = JSON.stringify(data);
    return fetch(url, postHeader);
  },
};
export default auth;
