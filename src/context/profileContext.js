import { createContext, useContext, useEffect, useState } from "react";
import getUserInfo from "../data/user";
import { useAuth } from "./authContext";
export const UserContext = createContext({ user: {} });

export const UserProvider = ({ children }) => {
  const { getToken } = useAuth(null);
  const [user, setUser] = useState({});
  useEffect(() => {
    //TODO this fetch is called many times when the useUser hook is invocated
    const fetchUser = async () => {
      try {
        const token = getToken();
        const response = await getUserInfo(token);
        setUser({ user: response?.result });
      } catch (e) {
        console.error("Error al obtener información del usuario:", e);
      }
    };
    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
