import { useState, useEffect } from "react";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const fields = loginFields;
let fieldsState = {};
//fields.forEach((field) => fieldsState[(field.id = "")]);

const LoginComponent = () => {
  const {
    isLoggedIn,
    login,
    logout,
    submitRemember,
    validateEmail,
    setRememberMe,
  } = useAuth();

  const [loginState, setLoginState] = useState(fieldsState);

  //const [token, setToken_] = useState(localStorage.getItem("healthyToken"));
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    validateRemember();
  }, []);

  useEffect(() => {
    const mail = localStorage.getItem("remember");
    setRememberMe(!(loginState.email !== mail));
  }, [loginState.email]);

  const validateRemember = () => {
    const emailRemember = localStorage.getItem("rememberMeHealthy");
    if (emailRemember && emailRemember !== "" && validateEmail(emailRemember)) {
      setLoginState({ email: emailRemember });
      setRememberMe(true);
    }
  };

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const handleRemember = (e) => {
    const check = e.target.checked;
    submitRemember(check, loginState.email);
  };

  const authenticateUser = async () => {
    const data = {
      email: loginState.email,
      password: loginState.password,
    };
    login(data);
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
      <FormExtra data={extraForm} handleRemember={handleRemember} />
    </form>
  );
};

export default LoginComponent;
