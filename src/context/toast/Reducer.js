// Definimos los tipos de acción para el reducer
export const ActionTypes = {
  SHOW_TOAST: "SHOW_TOAST",
  HIDE_TOAST: "HIDE_TOAST",
};

// Reducer para manejar los mensajes de toast
export const toastReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_TOAST:
      return {
        ...state,
        message: action.payload.message,
        title: action.payload.title,
        type: action.payload.type,
        show: true,
      };
    case ActionTypes.HIDE_TOAST:
      return {
        ...state,
        message: null,
        title: null,
        type: null,
        show: false,
      };
    default:
      return state;
  }
};
