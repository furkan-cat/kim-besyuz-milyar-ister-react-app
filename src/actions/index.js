import axios from "axios";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

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

export const fetching = () => async (dispatch) => {
  try {
    // const inc = useSelector((state) => state.increment);
    // useEffect(() => {
    //   console.log(inc);
    // }, [inc]);

    const response = await axios.get("https://opentdb.com/api.php?amount=15");
    console.log(response);
    const questions = [response.data.results[0]];
    const arr = [
      {
        data: response.data.results[0].incorrect_answers[0],
        correct: false,
      },
      {
        data: response.data.results[0].incorrect_answers[1],
        correct: false,
      },
      { data: response.data.results[0].incorrect_answers[2], correct: false },
      { data: response.data.results[0].correct_answer, correct: true },
    ];

    // response.data.results[0].correct_answer[0]

    function mix(arr) {
      let i = arr.length,
        temp;
      while (i--) {
        const j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }
    let answers = mix(arr);
    // console.log(answers);

    dispatch({
      type: "GET_QUESTIONS",
      payload: questions,
    });
    dispatch({
      type: "GET_ANSWERS",
      payload: answers,
    });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error });
  }
};

export const increment = () => {
  return { type: "INCREMENT" };
};
