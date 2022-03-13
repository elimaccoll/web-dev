import React from "react"
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <div>
            <div className="row mb-2">
                <div className="col-11">
                    <div className="input-group border rounded-pill bg-white">
                        <span className="input-group-text bg-transparent border-0">
                            <label for="search-bar">
                                <i className="fas fa-search" style = {{"color": "gray"}}></i>
                            </label>
                        </span>
                        <input id="search-bar" type="text" placeholder="Search Twitter"
                            className="form-control rounded-pill border-0 shadow-none"/>
                    </div>
                </div>
                <div className="col-1 my-auto ms-0">
                    <a href="explore-settings.html">
                        <i className="fa fa-cog fa-2x" style={{"color": "rgb(42, 159, 214)"}}></i>
                    </a>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="card">
                <img src="assets/explore/starship.jpg" className="card-img" alt="SpaceX Starship"/>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h4 className="card-title font-weight-bolder">SpaceX's Starship</h4>
                </div>
            </div>
            <PostSummaryList/>
        </div>
    );
}
export default ExploreComponent;
