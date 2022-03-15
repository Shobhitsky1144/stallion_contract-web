export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        success: true,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
