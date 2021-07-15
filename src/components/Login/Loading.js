import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, loadingStart, loadingEnd } from "../../actions/index";

function Loading() {
  const dispatch = useDispatch();
  let history = useHistory();
  let isLoading = useSelector((state) => state.loading);

  dispatch(loadingStart());
  setTimeout(() => {
    history.push("/game");
    dispatch(loadingEnd());
  }, 3000);

  return <div>{isLoading && <div>Loading...</div>}</div>;
}

export default Loading;
