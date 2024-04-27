import { useState } from "react";
import { recoveryFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
const fields = recoveryFields;
let fieldsState = {};
fields.forEach((field) => fieldsState[(field.id = "")]);

const RecoveryComponent = () => {
  const extraForm = [
    {
      link: "/signup",
      linkText: "Create an account?",
      text: "",
    },
  ];
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recoveryUser();
  };

  const recoveryUser = () => {
    // todo
  };

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

      <FormAction handleSubmit={handleSubmit} text="Search" />
      <FormExtra data={extraForm} isRemember={false} />
    </form>
  );
};

export default RecoveryComponent;
