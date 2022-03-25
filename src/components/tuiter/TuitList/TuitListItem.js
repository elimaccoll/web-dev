const TuitListItem = (
    {
        key = 123,
        tuit = {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
              "username": "ReactJS"
            },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "attachments": {
              "video": "unKvMC3Y1kI"
            },
            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            "stats": {
              "comments": 123,
              "retuits": 234,
              "likes": 345
            }
        }
    }) => {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={tuit["avatar-image"]} className="rounded-circle img-fluid"></img>
                    </div>
                    <div className="col-10">
                        <div className="font-bold">
                            {tuit.postedBy.username}
                        </div>
                        <div>
                            {tuit.tuit}
                        </div>
                        <img src={tuit["attachments"]}/>
                    </div>
                </div>
            </li>
        );
    };
export default TuitListItem
