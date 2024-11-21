import React, {FC} from 'react';

import commentApiService from "@/app/services/comment.api.service";
import CommentComponent from "@/app/components/comments-container/CommentComponent";

const CommentsComponent: FC = async () => {
    const comments = await commentApiService.getAll();

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;