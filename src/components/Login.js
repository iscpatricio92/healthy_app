import { useState } from "react";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
const fields = loginFields;
let fieldsState = {};
//fields.forEach((field) => fieldsState[(field.id = "")]);

const LoginComponent = () => {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    // todo
  };

  const extraForm = [
    {
      link: "/recovery",
      linkText: "Forgot password?",
      text: "",
    },
  ];

  console.log(fields);
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

      <FormAction handleSubmit={handleSubmit} text="Login" />
      <FormExtra data={extraForm} />
    </form>
  );
};

export default LoginComponent;
