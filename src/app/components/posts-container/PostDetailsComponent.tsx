import React, {FC} from 'react';

import {IPost} from "@/app/types";

interface IProps {
    post: IPost
}

const PostDetailsComponent: FC<IProps> = ({post: {id, title, body}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostDetailsComponent;