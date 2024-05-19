import { checkStatus } from ".";
import api from "../api";

const getOperationModuleByRol = async (token, rol) => {
  const response = api.modules.getModulesByRol(token, rol);
  const data = await response;
  const dataValidated = await checkStatus(data);
  return dataValidated.json();
};

export { getOperationModuleByRol };
