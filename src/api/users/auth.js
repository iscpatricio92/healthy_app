import { CONNECTIONS } from "../../constants/config.js";
import { postHeader } from "../base";
const { API_HEALTHY } = CONNECTIONS;
const auth = {
  login(data) {
    const url = `${API_HEALTHY}/api/auth/login`;
    //postHeader.headers.authorization = token;
    postHeader.body = JSON.stringify(data);
    return fetch(url, postHeader);
  },
};
export { auth };
