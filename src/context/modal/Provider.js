import { useContext, useReducer } from "react";
import modalReducer from "./Reducer";
import ModalContext from "./Context";
export const ModalProvider = ({ children }) => {
  const initialState = {
    isOpen: false,
  };
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <ModalContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
