import React, {FC} from 'react';
import Link from "next/link";

import {IPost} from "@/app/types";
import {urls} from "@/app/constants/urls";

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post: {id, title}}) => {
    return (
        <div>
            <Link href={urls.posts.byId(id)}>
                <div>{id}. {title}</div>
            </Link>
        </div>
    );
};

export default PostComponent;