import api from "../api";
const checkStatus = async (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  //TODO The type of error should be validated instead of closing the session
  if (response.status === 401) {
    window.localStorage.removeItem(api.key);
    window.location.href = "/login";
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};
export { checkStatus };
