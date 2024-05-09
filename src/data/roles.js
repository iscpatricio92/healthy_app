import { checkStatus } from ".";
import api from "../api";

export const getRoles = async (token) => {
  const response = api.roles.getRoles(token);
  const data = await response;
  const dataValidated = await checkStatus(data);
  return dataValidated.json();
};

export default getRoles;