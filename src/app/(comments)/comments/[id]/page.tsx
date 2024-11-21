import React from 'react';

import commentApiService from "@/app/services/comment.api.service";
import CommentDetailsComponent from "@/app/components/comments-container/CommentDetailsComponent";

type Props = { params: Promise<{ id: string }> };

const CommentDetailsPage = async ({params}: Props) => {
    const {id} = await params;
    const comment = await commentApiService.getById(id);

    return (
        <div>
            <CommentDetailsComponent comment={comment}/>
        </div>
    );
};

export default CommentDetailsPage;