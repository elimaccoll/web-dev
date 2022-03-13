import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
            <ul class="list-group">
                <li class="list-group-item">
                    Who to follow
                </li>
                {
                    who.map(w => {
                        return(
                            <WhoToFollowListItem who={w}/>
                        );
                    })
                }
            </ul>
        ); 
}
export default WhoToFollowList;