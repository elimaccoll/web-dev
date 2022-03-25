import WhoToFollowListItem from "./WhoToFollowListItem";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state);
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