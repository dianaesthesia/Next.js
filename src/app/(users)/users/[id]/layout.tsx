import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UserDetailsLayout'
};

type Props = { children: React.ReactNode };

const UserDetailsLayout = ({children}: Props) => {
    return (
        <div>
            UserDetailsLayout start
            {children}
            UserDetailsLayout end
        </div>
    );
};

export default UserDetailsLayout;