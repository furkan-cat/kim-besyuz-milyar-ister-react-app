const INITIAL_STATE = {
  question_num: 0,
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "QUESTION_NUMBER":
      return { ...state, question_num: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
