import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    console.log(tuit);
    return (
        <div className="row">
            <span className="col-3">
                <i className="far fa-comment me-2"></i>
                <span>{tuit.stats.comments}</span>
            </span>
            <span className="col-3">
                <i className="fa fa-retweet me-2"></i>
                <span>{tuit.stats.retuits}</span>
            </span>
            <span onClick={likeTuit}  className="col-3">
            {
                tuit.liked &&
                <i className="fas fa-heart me-2"
                    style={{color: 'red'}}></i>
            }
            {
                !tuit.liked &&
                <i className="far fa-heart me-2"></i>
            }
            {tuit.stats && tuit.stats.likes}
            </span>
            <span className="col-3">
                <i className="fa fa-share"></i>
            </span>
        </div>
    );
}
export default TuitStats;