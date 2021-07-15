const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_LOADING_START":
      return true;
    case "SET_LOADING_END":
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
