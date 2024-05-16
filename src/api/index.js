import users from "./users";
import settings from "./settings";
const api = {
  key: "healthyToken",
  ...users,
  ...settings,
};
export default api;
