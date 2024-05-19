import { CONNECTIONS } from "../../constants/config.js";
import { getHeader, patchHeader, postHeader } from "../base.js";
const { API_HEALTHY, PREFIX } = CONNECTIONS;
const modules = {
  getModules(token) {
    const url = `${API_HEALTHY}${PREFIX}/modules`;
    getHeader.headers.authorization = `Bearer ${token}`;
    return fetch(url, getHeader);
  },
  updateModules(token, data) {
    const url = `${API_HEALTHY}${PREFIX}/modules/${data.id}`;
    patchHeader.headers.authorization = `Bearer ${token}`;
    patchHeader.body = JSON.stringify(data);
    return fetch(url, patchHeader);
  },
  addModules(token, data) {
    const url = `${API_HEALTHY}${PREFIX}/modules`;
    postHeader.headers.authorization = `Bearer ${token}`;
    postHeader.body = JSON.stringify(data);
    return fetch(url, postHeader);
  },

  getModulesByRol(token, rol) {
    const url = `${API_HEALTHY}${PREFIX}/operations-module/${rol}`;
    getHeader.headers.authorization = `Bearer ${token}`;
    return fetch(url, getHeader);
  },
};
export default modules;
