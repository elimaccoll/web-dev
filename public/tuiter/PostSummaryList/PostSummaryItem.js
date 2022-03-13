const PostSummaryItem = (post) => {
    let { topic, userName, time, image, title, tweets } = post;
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10 my-auto">
                    <div class="text-secondary">${topic}</div>
                    <div>
                        <span class="wd-font-bold">${userName} <i class="fa fa-check-circle"></i></span>
                        <span class="text-secondary">- ${time}</span>
                    </div>
                    <div class="wd-font-bold">
                        ${title}
                    </div>
                    <div class="text-secondary">${tweets ? `${tweets} Tweets`: ''}</div>
                </div>
                <div class="col-2 my-auto">
                    <img src="${image}" class="main-post-content-img img-fluid rounded" alt="${userName} post image">
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;