import React from "react";
import loginImg from "../../assets/healthcare-security.jpeg";
import Header from "../../components/Header";
const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          src={loginImg}
          alt="Login HealthyApp"
        />
      </div>
      <div className="bg-gray-100 flex f-full items-center justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 shadow-lg shadow-gray-500">
          <h2 className="text-4xl font-bold text-center py-6"></h2>
          <Header
            heading="Healthy App"
            paragraph="All patients are here "
            linkName=""
            linkUrl=""
          />
          <div className="flex flex-col pb-2">
            <label>Username</label>
            <input className="relative border p-2" type="text" />
          </div>
          <div className="flex flex-col pb-2">
            <label>Password</label>
            <input className="relative border p-2" type="text" />
          </div>
          <button className="border w-full mt-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white relative">
            Sign In
          </button>

          <p className="flex items-center pt-2">
            <input className="mr-2" type="checkbox" /> Remember me
          </p>
          <p className="mt-8 text-center">Create an account</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
