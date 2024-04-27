import React from "react";
//import loginImg from "../../assets/healthcare-security.jpeg";
import Header from "../../components/Header";
import LoginComponent from "../../components/Login";
const LoginPage = () => {
  return (
    <>
      <Header
        heading="Healthy App"
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
      />
      <LoginComponent />
    </>
  );
};

export default LoginPage;
