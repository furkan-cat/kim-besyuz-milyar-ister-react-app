import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "../../actions/index";
import useSound from "use-sound";
import play from "../../assets/play.mp3";
import correct from "../../assets/correct.mp3";
import wrong from "../../assets/wrong.mp3";
import "./Questions.scss";

const Questions = () => {
  const { data, answers } = useSelector((state) => state.fetching);
  const { question_num } = useSelector((state) => state.question);
  const [selected, setSelected] = useState(null);
  const [className, setClassName] = useState("answer");

  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetching());
  }, []);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  let arr = [];
  answers.map((answers) => {
    arr.push(
      {
        data: answers[question_num].incorrect_answers[0],
        correct: false,
      },
      {
        data: answers[question_num].incorrect_answers[1],
        correct: false,
      },
      {
        data: answers[question_num].incorrect_answers[2],
        correct: false,
      },
      {
        data: answers[question_num].correct_answer,
        correct: true,
      }
    );
    return arr;
  });

  const mixedAnswers = (arr) => {
    let i = arr.length,
      temp;
    while (i--) {
      const j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const handleClicked = useCallback(
    (x) => {
      setSelected(x.data);
      setClassName("answer active");
      delay(3000, () => {
        setClassName(x.data === selected ? "answer correct" : "answer wrong");
      });
      delay(5000, () => {
        if (x.correct) {
          correctAnswer();
          delay(1000, () => {
            dispatch({ type: "QUESTION_NUMBER", payload: question_num + 1 });
            setSelected(null);
          });
        } else {
          wrongAnswer();
        }
      });
    },
    [question_num, selected]
  );

  // useEffect((x) => {
  //   letsPlay();
  //   handleClicked(x);
  // }, []);
  // useEffect(() => {
  //   answers();
  // }, [question_num]);

  // console.log(arr);

  // let n = 0;
  // let seperatedArr = [];

  // for (let i = 0; i <= 15; i++) {
  //   seperatedArr.push(answers[i].correct_answer);
  // }
  // console.log(seperatedArr);
  // const questions = [response.data.results];
  // const arr = [
  //   {
  //     data: response.data.results[0].incorrect_answers[0],
  //     correct: false,
  //   },
  //   {
  //     data: response.data.results[0].incorrect_answers[1],
  //     correct: false,
  //   },
  //   { data: response.data.results[0].incorrect_answers[2], correct: false },
  //   { data: response.data.results[0].correct_answer, correct: true },
  // ];

  const cevap = mixedAnswers(arr);
  return (
    <div className="wrapper">
      <div className="question-container">
        <div>
          {data.length !== 0 &&
            data.map((user, i) => (
              <div key={i}>{user[question_num].question}</div>
            ))}
        </div>
      </div>
      <div className="answers">
        {cevap.map((x, i) => (
          <div key={i} className="answer" onClick={() => handleClicked(x)}>
            {x.data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
