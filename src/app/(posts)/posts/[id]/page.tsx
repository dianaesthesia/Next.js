import React from 'react';

import postApiService from "@/app/services/post.api.service";
import PostDetailsComponent from "@/app/components/posts-container/PostDetailsComponent";

interface IProps {
    params: Promise<{ id: string }>
}

const PostsDetailsPage = async ({params}: IProps) => {
    const {id} = await params;
    const post = await postApiService.getById(id);

    return (
        <div>
            <PostDetailsComponent post={post}/>
        </div>
    );
};

export default PostsDetailsPage;