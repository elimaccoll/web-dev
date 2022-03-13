import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"

const PostSummaryList = () => {
    return (
            <ul class="list-group">
                {
                    posts.map(p => {
                        return(
                            <PostSummaryItem post={p}/>
                        );
                    })
                }
            </ul>
        ); 
}
export default PostSummaryList;
