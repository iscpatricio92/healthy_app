const loginFields = [
  {
    labelText: "Email",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];
const signupFields = [
  {
    labelText: "First Name",
    labelFor: "firstname",
    id: "firstname",
    name: "firstname",
    type: "text",
    autoComplete: "firstname",
    isRequired: true,
    placeholder: "Enter your first name",
  },
  {
    labelText: "Last Name",
    labelFor: "lastname",
    id: "lastname",
    name: "lastname",
    type: "text",
    autoComplete: "lastname",
    isRequired: true,
    placeholder: "Enter your last name",
  },
  {
    labelText: "Gender",
    labelFor: "gender",
    id: "gender",
    name: "gender",
    type: "radio",
    options: ["male", "female"],
    defaultValue: "",
    isRequired: true,
    placeholder: "Gender",
  },
  {
    labelText: "Birthday",
    type: "dropdown",
    id: "birthday",
    labelFor: "birthday",
    options: ["January", "February", "March"],
    defaultValue: "",
    isRequired: true,
    placeholder: "Birthday",
  },
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

const recoveryFields = [
  {
    labelText: "Email",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
];

export { loginFields, signupFields, recoveryFields };
