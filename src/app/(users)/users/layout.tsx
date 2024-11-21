import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersLayout'
};

type Props = { children: React.ReactNode };

const UsersLayout = ({children}: Props) => {
    return (
        <div>
            UsersLayout start
            {children}
            UsersLayout end
        </div>
    );
};

export default UsersLayout;