import { useDispatch } from "react-redux";
import { updateTuit } from "../../../actions/tuits-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    updateTuit(dispatch, tuit);
  };
  return (
    <div className="row">
      <span className=" clickable-icon col-3">
        <i className="far fa-comment me-2"></i>
        <span>{tuit.stats && tuit.stats.comments}</span>
      </span>
      <span className=" clickable-icon col-3">
        <i className="fa fa-retweet me-2"></i>
        <span>{tuit.stats && tuit.stats.retuits}</span>
      </span>
      <span
        onClick={() => {
          likeTuit();
        }}
        className="col-3 clickable-icon"
      >
        {tuit.liked && (
          <i className="fas fa-heart me-2" style={{ color: "red" }}></i>
        )}
        {!tuit.liked && <i className="far fa-heart me-2"></i>}
        {(tuit.stats && tuit.stats.likes) || tuit.likes}
      </span>
      <span className="col-3 clickable-icon">
        <i className="fa fa-share"></i>
      </span>
    </div>
  );
};
export default TuitStats;
