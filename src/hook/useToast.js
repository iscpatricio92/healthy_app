import { useContext } from "react";
import ToastContext from "../context/toast/Context";
import { ActionTypes } from "../context/toast/Reducer";

export const useToast = () => {
  const [state, dispatch] = useContext(ToastContext);

  const showToast = (title, message, type = "info") => {
    dispatch({
      type: ActionTypes.SHOW_TOAST,
      payload: { title, message, type },
    });
  };
  const success = (title, message) => showToast(title, message, "success");
  const error = (title, message) => showToast(title, message, "error");
  const warning = (title, message) => showToast(title, message, "warning");
  const info = (title, message) => showToast(title, message, "info");

  return { showToast, success, error, warning, info };
};
