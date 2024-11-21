import React from 'react';

import UserDetailsComponent from "@/app/components/users-container/UserDetailsComponent";

type Props = {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ data: string }>
};

const UserDetailsPage = ({params, searchParams}: Props) => {
    return (
        <div>
            <UserDetailsComponent params={params} searchParams={searchParams}/>
        </div>
    );
};

export default UserDetailsPage;
