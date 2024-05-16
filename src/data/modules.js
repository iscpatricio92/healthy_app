import { checkStatus } from ".";
import api from "../api";

export const getModules = async (token) => {
  const response = api.modules.getModules(token);
  const data = await response;
  const dataValidated = await checkStatus(data);
  return dataValidated.json();
};

export const updateModules = async (token, formData) => {
  const response = api.modules.updateModules(token, formData);
  const data = await response;
  const dataValidated = await checkStatus(data);
  return dataValidated.json();
};

export const addModules = async (token, formData) => {
  const response = api.modules.addModules(token, formData);
  const data = await response;
  const dataValidated = await checkStatus(data);
  return dataValidated.json();
};

export default getModules;
