const initialState = { name: "", surname: "" };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_TYPE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default loginReducer;
