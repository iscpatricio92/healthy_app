import users from "./users";
import roles from "./settings";
export default {
  key: "healthyToken",
  ...users,
  ...roles,
};
