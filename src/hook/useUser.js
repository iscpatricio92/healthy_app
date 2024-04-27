import { useQuery } from "react-query";
import postLogin from "../data/users";

export const usePostLogin = () => {
  return useQuery("usePostLogin", postLogin, { enabled: false });
};
