import { createContext, useContext, useEffect, useState } from "react";

import postLogin from "../data/auth";
import api from "../api/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [authError, setAuthError] = useState(false);

  const validateEmail = (mail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  };
  const submitRemember = async (isRemember, mail) => {
    setRememberMe(isRemember);
    const emailRemember = localStorage.getItem("rememberMeHealthy");
    if (isRemember) {
      localStorage.setItem("rememberMeHealthy", mail);
    } else if (!validateEmail(emailRemember) || emailRemember === mail) {
      localStorage.removeItem("rememberMeHealthy");
    }
  };

  const setToken = async (token, value) => {
    localStorage.setItem(token, value);
  };

  const login = async (data) => {
    try {
      const { status, result, statusCode } = await postLogin(data);
      if (status && result?.accessToken) {
        //await submitRemember(data.email);
        await setToken(api.key, result.accessToken);
        setIsLoggedIn(true);
      } else {
        console.log("ERROR");
        setAuthError(true);
      }
    } catch (e) {
      console.log("ERRORs", e);
      setAuthError(true);
    }
  };
  const logout = () => {
    console.log("LOGOUT");
    setIsLoggedIn(false);
    localStorage.removeItem(api.key);
  };

  const getToken = () => {
    const token = localStorage.getItem(api.key);
    return token;
  };
  const isTokenExpired = (token) =>
    Date.now() >= JSON.parse(atob(token.split(".")[1])).exp * 1000;

  useEffect(() => {
    const token = getToken();
    if (token && !isTokenExpired(token)) {
      setIsLoggedIn(true);
    } else {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        submitRemember,
        validateEmail,
        setRememberMe,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useTokenValidation = () => {
  const { isLoggedIn, logout, getToken, isTokenExpired } = useAuth();
  useEffect(() => {
    const token = getToken();

    if (isLoggedIn && isTokenExpired(token)) {
      console.warn("Token inválido. Cerrando sesión.");
      logout();
    }
  });
};

export const useAuth = () => useContext(AuthContext);
