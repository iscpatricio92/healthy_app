import React from "react";
//import loginImg from "../../assets/healthcare-security.jpeg";
import Header from "../../components/LoginHeader/Header";
import LoginComponent from "../../components/Login";
const LoginPage = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Healthy App"
          paragraph="Don't have an account yet?"
          linkName="Signup"
          linkUrl="/signup"
        />
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
