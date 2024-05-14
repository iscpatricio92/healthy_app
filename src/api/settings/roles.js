import { CONNECTIONS } from "../../constants/config.js";
import { getHeader, patchHeader, postHeader } from "../base.js";
const { API_HEALTHY, PREFIX } = CONNECTIONS;
const roles = {
  getRoles(token) {
    const url = `${API_HEALTHY}${PREFIX}/roles`;
    getHeader.headers.authorization = `Bearer ${token}`;
    return fetch(url, getHeader);
  },
  updateRoles(token, data) {
    const url = `${API_HEALTHY}${PREFIX}/roles/${data.id}`;
    patchHeader.headers.authorization = `Bearer ${token}`;
    patchHeader.body = JSON.stringify(data);
    return fetch(url, patchHeader);
  },
  addRoles(token, data) {
    const url = `${API_HEALTHY}${PREFIX}/roles`;
    postHeader.headers.authorization = `Bearer ${token}`;
    postHeader.body = JSON.stringify(data);
    return fetch(url, postHeader);
  },
};
export default roles;
