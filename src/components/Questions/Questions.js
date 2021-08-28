import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching, increment } from "../../actions/index";
import "./Questions.scss";

const Questions = () => {
  const { answers, q } = useSelector((state) => state.fetching);
  const [numberOfPage, setNumberOfPage] = useState(null);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetching());
  }, []);

  const handleClicked = (x) => {
    setSelected(x);
  };

  return (
    <div className="wrapper">
      <div className="question-container">
        <div>
          {q.map((user, i) => (
            <div key={i}>{user.question}</div>
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

      <div className="answer-container--2"></div>
      <button onClick={() => dispatch(increment(0))}>Next</button>
    </div>
  );
};

export default Questions;
