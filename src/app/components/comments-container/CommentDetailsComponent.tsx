import React, {FC} from 'react';

import {ICommentModel} from "@/app/models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentDetailsComponent: FC<IProps> = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default CommentDetailsComponent;