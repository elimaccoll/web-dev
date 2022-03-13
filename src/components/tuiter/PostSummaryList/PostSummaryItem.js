const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "assets/explore/reactjs.png",
        }
    }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10 my-auto">
                    <div className="text-secondary">{post.topic}</div>
                    <div>
                        <span className="wd-font-bold">{post.userName} <i className="fa fa-check-circle"></i></span>
                        <span className="text-secondary"> - {post.time}</span>
                    </div>
                    <div className="wd-font-bold">
                        {post.title}
                    </div>
                    <div className="text-secondary">{post.tweets ? `${post.tweets} Tweets`: ''}</div>
                </div>
                <div className="col-2 my-auto">
                    <img src={post.image} className="main-post-content-img img-fluid rounded" alt="post image"/>
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;