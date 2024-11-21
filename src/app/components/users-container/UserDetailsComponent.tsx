import React, {FC} from 'react';

import SingleUserDetailsComponent from "@/app/components/users-container/SingleUserDetailsComponent";
// import userApiService from "@/app/services/user.api.service";

type Props = {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ data: string }>
};

const UserDetailsComponent: FC<Props> = async ({searchParams}) => {
    // const {id} = await params;
    // const user = await userApiService.getById(id);

    const {data} = await searchParams;

    return (
        <div>
            <SingleUserDetailsComponent user={JSON.parse(data)}/>
        </div>
    );
};

export default UserDetailsComponent;