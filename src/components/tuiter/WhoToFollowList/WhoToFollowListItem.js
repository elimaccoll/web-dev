const WhoToFollowListItem =  (
    {
        who = {
            avatarIcon: 'assets/explore/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return (
        <div>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2 my-auto">
                        <img src={who.avatarIcon} className="who-to-follow-img rounded-circle img-fluid" alt="avatar"/>
                    </div>
                    <div className="col-6 col-xxl-7 col-xl-6 my-auto">
                        <div className="text-nowrap wd-font-bold">
                            {who.userName} <i className="fa fa-check-circle"></i> 
                        </div>
                        <div>
                            @{who.handle}
                        </div>
                    </div>
                    <div className="col-4 col-xxl-3 col-xl-4 my-auto btn-group">
                        <button className="btn btn-primary rounded-pill">
                            <span>Follow</span>
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
}
export default WhoToFollowListItem;
