import { useEffect, useReducer } from "react";

import { ActionTypes, toastReducer } from "./Reducer";
import ToastContext from "./Context";
import Toast from "../../components/Toast";

const ToastProvider = ({ children }) => {
  const initialState = { title: null, message: null, type: null, show: false };
  const [state, dispatch] = useReducer(toastReducer, initialState);

  useEffect(() => {
    let timeOut;
    if (state.show) {
      timeOut = setTimeout(() => {
        setTimeout(() => {
          dispatch({ type: ActionTypes.HIDE_TOAST });
        }, 3000);
      });
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [state.show]);
  //TODO EVERYTHING should be improved for the exit animation
  return (
    <ToastContext.Provider value={[state, dispatch]}>
      {children}

      <div
        className={`fixed bottom-4 right-4 rounder z-99999  transition-all duration-500 ${
          state.show ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        {state.show && <Toast data={state} />}{" "}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
