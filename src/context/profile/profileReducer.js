const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_PROFILE":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
