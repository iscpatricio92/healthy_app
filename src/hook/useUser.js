import { useContext } from "react";
import { UserContext } from "../context/profileContext";

export const useProfile = () => {
  const ctxProfile = useContext(UserContext);
  if (ctxProfile === undefined) {
    throw new Error("useProfile must be used within an UserContextProvider");
  }
  return ctxProfile;
};
