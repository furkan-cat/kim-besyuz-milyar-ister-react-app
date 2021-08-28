const INITIAL_STATE = {
  q: [],
  message: "",
  answers: [],
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...state, q: action.payload };
    case "FETCH_ERROR":
      return { ...state, message: action.payload };
    case "GET_ANSWERS":
      return { ...state, answers: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
