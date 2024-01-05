import getComments from "@/wp/comment/getComments";
import { CommentType, groupByParentType } from "@/wp/comment/types";
import setGroupBy from "@/wp/comment/groupByParrent";
type CommentsListPropsType = {
    comments: Array<CommentType>
}
const showComment = (comment: CommentType, groupByParent: groupByParentType) => {
    return <div key={comment.id}> {comment.authorName}
        <time>{comment.date.toString()}</time>
        <div
            dangerouslySetInnerHTML={{ __html: comment.content }}>
        </div>
        <button> پاسخ</button>
        {!!groupByParent[comment.id]?.length && groupByParent[comment.id].map(comment => showComment(comment, groupByParent))}
        {/* {showCommentReplies(comment, groupByParent)} */}

        <hr></hr>

    </div>
}

// const showCommentReplies = (comment: CommentType, groupByParent: [[]]) => {
//     if (!!groupByParent[comment.id]?.length) {
//         return <>
//             {groupByParent[comment.id].map(showComment)}
//             <hr></hr>
//         </>
//     }
// }
export default function CommentsList({ comments }: CommentsListPropsType): React.ReactNode {
    let groupByParent = setGroupBy(comments)
    return <div>
        {comments.filter(comment => comment.parent == 0).map(comment => {
            return (showComment(comment, groupByParent)

            )
        })}
    </div>
}