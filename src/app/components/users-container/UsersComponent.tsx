import React, {FC} from 'react';

import userApiService from "@/app/services/user.api.service";
import UserComponent from "@/app/components/users-container/UserComponent";

const UsersComponent: FC = async () => {
    const users = await userApiService.getAll();

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;