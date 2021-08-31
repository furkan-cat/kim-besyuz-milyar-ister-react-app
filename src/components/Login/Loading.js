import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadingStart, loadingEnd } from "../../actions/index";
import CircleLoader from "react-spinners/CircleLoader";
import "./Loading.scss";

const Loading = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let isLoading = useSelector((state) => state.loading);

  dispatch(loadingStart());
  setTimeout(() => {
    history.push("/game");
    dispatch(loadingEnd());
  }, 3000);

  return (
    <div className="loading">
      {isLoading && (
        <CircleLoader color={"#813F93"} isLoading={isLoading} size={80} />
      )}
    </div>
  );
};

export default Loading;
