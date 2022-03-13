const WhoToFollowListItem = (who) => {
    let { avatarIcon, handle, userName } = who;
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2 my-auto">
                    <img src="${avatarIcon}" class="who-to-follow-img rounded-circle img-fluid" alt="${userName} avatar icon">
                </div>
                <div class="col-6 col-xxl-7 col-xl-6 my-auto">
                    <div class="text-nowrap wd-font-bold">
                        ${userName} <i class="fa fa-check-circle"></i> 
                    </div>
                    <div>
                        @${handle}
                    </div>
                </div>
                <div class="col-4 col-xxl-3 col-xl-4 my-auto btn-group">
                    <button class="btn btn-primary rounded-pill">
                        <span>Follow</span>
                    </button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
