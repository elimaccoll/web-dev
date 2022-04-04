import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "../HomeScreen/TuitStats";
import { deleteTuit } from "../../../actions/tuits-actions";

const TuitListItem = ({
  key = 123,
  tuit = {
    _id: "123",
    topic: "Web Development",
    postedBy: {
      username: "ReactJS",
    },
    liked: true,
    verified: false,
    handle: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    attachments: {
      video: "unKvMC3Y1kI",
    },
    "logo-image": "../../../images/react-blue.png",
    "avatar-image": "../../../images/react-blue.png",
    stats: {
      comments: 123,
      retuits: 234,
      likes: 345,
    },
  },
}) => {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 text-center">
          <img
            src={tuit["avatar-image"]}
            className="img-fluid rounded-circle"
          ></img>
        </div>
        <div className="col-10">
          <div className="d-flex justify-content-between">
            <div className="font-bold">
              {tuit.postedBy && tuit.postedBy.username}
              <span className="ms-2 text-secondary">@{tuit.handle}</span>
            </div>
            <div>
              <i
                className="fa fa-remove text-white"
                onClick={() => {
                  deleteTuit(dispatch, tuit);
                }}
              ></i>
            </div>
          </div>

          <div>{tuit.tuit}</div>
          {tuit.attachments && tuit.attachments.image && (
            <img src={tuit.attachments.image} className="img-fluid rounded" />
          )}
          {tuit.attachments && tuit.attachments.video && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="post-video img-fluid"
            ></iframe>
          )}
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitListItem;
