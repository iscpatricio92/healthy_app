import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/Login"));
const RecoveryPage = lazy(() => import("../pages/Recovery"));
const DashboardPage = lazy(() => import("../pages/admin-dashboard"));
const SignupPage = lazy(() => import("../pages/Signup"));

//TODO implement this object to create dynamic routes in index.js
//TODO validate if route is privacy or public url
const routes = [
  {
    path: "/",
    element: DashboardPage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/forgot-password",
    element: RecoveryPage,
  },
  {
    path: "/signup",
    element: SignupPage,
  },
];
export default routes;
