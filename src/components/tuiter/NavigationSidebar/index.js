import React from "react"


const NavigationSidebar = (
    {
        active = 'home'
    }) => {
    // Updates the active tab
    active = window.location.pathname.split('/').pop();
    if (active === "") {
        active = 'home'
    }
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className={`list-group-item ${active === 'home' ? 'active' : ""}`} href="/tuiter/">
                    <i className="fa fa-home me-2"></i> 
                    <span className="d-none d-xl-inline-block"> Home</span>
                </a>
                <a className={`list-group-item ${active === 'explore' ? 'active' : ""}`} href="/tuiter/explore">
                    <i className="fa fa-hashtag me-2"></i>
                    <span className="d-none d-xl-inline-block"> Explore</span>
                </a>
                <a className={`list-group-item ${active === 'notifications' ? 'active' : ""}`} href="/">
                    <i className="fa fa fa-bell me-2"></i>
                    <span className="d-none d-xl-inline-block"> Notifications</span>
                </a>
                <a className={`list-group-item ${active === 'messages' ? 'active' : ""}`} href="/">
                    <i className="fa fa-envelope me-2"></i>
                    <span className="d-none d-xl-inline-block"> Messages</span>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ""}`} href="/">
                    <i className="fa fa-bookmark me-2"></i>
                    <span className="d-none d-xl-inline-block"> Bookmarks</span>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ""}`} href="/">
                    <i className="fa fa-list me-2"></i>
                    <span className="d-none d-xl-inline-block"> Lists</span>
                </a>
                <a className={`list-group-item ${active === 'profile' ? 'active' : ""}`} href="/">
                    <i className="fa fa-user me-2"></i>
                    <span className="d-none d-xl-inline-block"> Profile</span>
                </a>
                <a className={`list-group-item ${active === 'more' ? 'active' : ""}`} href="/">
                    <i className="fa fa-ellipsis-h me-2"></i>
                    <span className="d-none d-xl-inline-block"> More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
