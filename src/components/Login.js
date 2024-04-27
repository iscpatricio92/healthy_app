import { useState, useEffect } from "react";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
import postLogin from "../data/users";
import { SUCCESS, ERROR } from "../constants/status";
import api from "../api/index";
import { useQuery, useQueryClient } from "react-query";
import { usePostLogin } from "../hook/useUser";

const fields = loginFields;
let fieldsState = {};
//fields.forEach((field) => fieldsState[(field.id = "")]);

const LoginComponent = () => {
  const queryClient = new useQueryClient();
  const [loginState, setLoginState] = useState(fieldsState);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [token, setToken_] = useState(localStorage.getItem("healthyToken"));

  const validateEmail = (mail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  };

  const validateRemember = () => {
    const emailRemember = localStorage.getItem("remember");
    if (emailRemember && emailRemember !== "" && validateEmail(emailRemember)) {
      setEmail(emailRemember);
      setRememberMe(true);
    }
  };

  const setToken = (token, value) => {
    localStorage.setItem(token, value);
  };

  const submitRemember = (mail) => {
    const emailRemember = localStorage.getItem("remember");
    if (rememberMe) {
      localStorage.setItem("remember", mail);
    } else if (!validateEmail(emailRemember) || emailRemember === email) {
      localStorage.removeItem("remember");
    }
  };

  useEffect(() => {
    validateRemember();
  }, []);

  useEffect(() => {
    const mail = localStorage.getItem("remember");
    setRememberMe(!(email !== mail));
  }, [email]);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(e);
  };
  const isLoginFormComplete = (data) => {
    const { email: e, password: p, confirmPassword } = data;
    return !!(e && p) || !!(p && confirmPassword);
  };

  const authenticateUser = async (e) => {
    const data = {
      email: "isc.patricio@gmail.com",
      password: "password-pat",
    };

    try {
      const { status, result, statusCode } = await postLogin(data);
      if (status && result?.accessToken) {
        setToken(api.key, result.accessToken);
      } else {
        console.log("ERROR", e);
        setAuthError(true);
      }
    } catch (e) {
      console.log("ERRORs", e);
      setAuthError(true);
    }

    /*
    try {
      const { response } = await postLogin(data);
      console.log("VIEW", response);
      /*if (statusCode) {
        //const { updatedPassword, businessId, token, id: userId } = user;
        submitRemember(email);
        setToken(api.key, statusCode);
      } else {
        console.log("ERROR", e);
        setAuthError(true);
      }
    } catch (e) {
      console.log("ERRORs", e);
      setAuthError(true);
    }*/
  };

  const extraForm = [
    {
      link: "/recovery",
      linkText: "Forgot password?",
      text: "",
    },
  ];

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormAction text="Login" handleSubmit={handleSubmit} />
      <FormExtra data={extraForm} />
    </form>
  );
};

export default LoginComponent;
