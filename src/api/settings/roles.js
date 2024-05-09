import { CONNECTIONS } from "../../constants/config.js";
import { getHeader } from "../base.js";
const { API_HEALTHY } = CONNECTIONS;
const user = {
  getRoles(token) {
    //TODO add slash api on constants
    const url = `${API_HEALTHY}/api/roles`;
    getHeader.headers.authorization = `Bearer ${token}`;
    return fetch(url, getHeader);
  },
};
export default user;
