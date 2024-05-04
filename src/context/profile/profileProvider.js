import { useEffect, useReducer } from "react";
import UserContext from "./profileContext";
import userReducer from "./profileReducer";
import { useAuth } from "../auth/authContext";
import getUserInfo from "../../data/user";

//const [user, setUser] = useState({});
const UserProvider = ({ children }) => {
  const { getToken } = useAuth(null);
  const initialState = {
    user: {},
    permissions: {},
  };
  const [globalState, dispatch] = useReducer(userReducer, initialState);
  const token = getToken();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await getUserInfo(token);
          dispatch({
            type: "GET_USER_PROFILE",
            payload: response?.result,
          });
        }
      } catch (e) {
        console.error("Error al obtener información del usuario:", e);
      }
    };
    fetchUser();
  }, []);

  //TODO fetchUserRoles
  return (
    <UserContext.Provider value={{ user: globalState.user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
