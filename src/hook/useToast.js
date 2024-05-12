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
  const success = (message) => showToast("Success", message, "success");
  const error = (message) => showToast("Error", message, "error");
  const warning = (message) => showToast("Warning", message, "warning");
  const info = (message) => showToast("Info", message, "info");

  return { showToast, success, error, warning, info };
};
