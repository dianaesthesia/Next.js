import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CommentDetailsLayout'
};

type Props = { children: React.ReactNode };

const CommentDetailsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CommentDetailsLayout;