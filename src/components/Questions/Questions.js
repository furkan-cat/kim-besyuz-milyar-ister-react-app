import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "../../actions/index";
import "./Questions.scss";

const Questions = () => {
  const { data, answers } = useSelector((state) => state.fetching);
  const { question_num } = useSelector((state) => state.question);

  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetching());
  }, []);

  const handleClicked = (x) => {
    setSelected(x);
    setTimeout(() => {
      dispatch({ type: "QUESTION_NUMBER", payload: question_num + 1 });
    }, [4000]);
    // setTimeout(() => {}, []);
  };

  console.log(data);
  // data = data[0];
  // console.log(data[0]);
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
      <div className="answer-container">
        {answers.map((x, i) => (
          <React.Fragment key={i}>
            <button
              className={`answer ${
                selected === x && x.correct ? "active" : ""
              }`}
              onClick={() => handleClicked(x)}
            >
              {x.data}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Questions;
