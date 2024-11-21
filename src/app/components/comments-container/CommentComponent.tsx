import React, {FC} from 'react';
import Link from "next/link";

import {ICommentModel} from "@/app/models/ICommentModel";
import {urls} from "@/app/constants/urls";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment: {id, name}}) => {
    return (
        <div>
            <Link href={urls.comments.byId(id)}>
                <div>{id}. {name}</div>
            </Link>
        </div>
    );
};

export default CommentComponent;