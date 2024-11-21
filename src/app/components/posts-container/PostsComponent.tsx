import React, {FC} from 'react';

import postApiService from "@/app/services/post.api.service";
import PostComponent from "@/app/components/posts-container/PostComponent";

const PostsComponent: FC = async () => {
    const posts = await postApiService.getAll();

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;