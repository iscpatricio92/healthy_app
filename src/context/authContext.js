import { createContext, useContext, useEffect, useState } from "react";

import postLogin from "../data/auth";
import api from "../api/index";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [authError, setAuthError] = useState(false);
  const navigate = useNavigate();

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
        navigate("/");
      } else {
        console.log("ERROR", statusCode);
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
    window.localStorage.removeItem(api.key);
    navigate("/login");
  };
  const isTokenValid = async () => {
    const token = localStorage.getItem(api.key);
    if (token) {
      const decodedToken = jwtDecode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();
      return expirationDate > currentDate;
    }
    return false;
  };

  const getToken = () => {
    const token = localStorage.getItem(api.key);
    return token;
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        submitRemember,
        validateEmail,
        setRememberMe,
        getToken,
        isTokenValid,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
