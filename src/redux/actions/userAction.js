export const loginUser = (data) => {
  return {
    type: "USER_LOGIN",
    payload: {
      data,
    },
  };
};
