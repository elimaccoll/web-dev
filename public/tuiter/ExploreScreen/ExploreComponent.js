import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row mb-2">
                <!-- Search Field -->
                <div class="col-11">
                    <div class="input-group border rounded-pill bg-white">
                        <span class="input-group-text bg-transparent border-0">
                            <label for="search-bar"><i class="fas fa-search"></i></label>
                        </span>
                        <input id="search-bar" type="text" placeholder="Search Twitter"
                            class="form-control rounded-pill border-0 shadow-none">
                    </div>
                </div>
                <!-- Cog Icon -->
                <div class="col-1 my-auto ms-0">
                    <a href="explore-settings.html">
                        <i class="fa fa-cog fa-2x" style="color: rgb(42, 159, 214)"></i>
                    </a>
                </div>
            </div>
            <!-- Tabs -->
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <!-- Image with overlaid text -->
            <div class="card">
                <img src="../assets/explore/starship.jpg" class="card-img" alt="SpaceX Starship">
                <div class="card-img-overlay">
                    <h4 class="card-title">SpaceX's Starship</h4>
                </div>
            </div>
            <!-- Post Summary List -->
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
