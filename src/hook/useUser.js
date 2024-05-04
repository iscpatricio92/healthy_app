import { useContext } from "react";
import { UserContext } from "../context/profile/profileContext";

export const useProfile = () => {
  const profile = useContext(UserContext);
  if (profile === undefined) {
    throw new Error("useProfile must be used within an UserContextProvider");
  }
  return profile;
};
