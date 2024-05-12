import { CONNECTIONS } from "../../constants/config.js";
import { getHeader, patchHeader } from "../base.js";
const { API_HEALTHY } = CONNECTIONS;
const user = {
  getRoles(token) {
    //TODO add slash api on constants
    const url = `${API_HEALTHY}/api/roles`;
    getHeader.headers.authorization = `Bearer ${token}`;
    return fetch(url, getHeader);
  },
  updateRoles(token, data) {
    //TODO add slash api on constants
    const url = `${API_HEALTHY}/api/roles/${data.id}`;
    patchHeader.headers.authorization = `Bearer ${token}`;
    patchHeader.body = JSON.stringify(data);
    return fetch(url, patchHeader);
  },
};
export default user;
