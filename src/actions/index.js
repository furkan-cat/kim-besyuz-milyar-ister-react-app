export const login = (form) => {
  return {
    type: "LOGIN_TYPE",
    payload: form,
  };
};

export const loadingStart = () => {
  return { type: "SET_LOADING_START" };
};

export const loadingEnd = () => {
  return { type: "SET_LOADING_END" };
};
