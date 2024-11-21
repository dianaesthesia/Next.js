import React, {FC} from 'react';
import Link from "next/link";

import {IUserModel} from "@/app/models/IUserModel";
import {urls} from "@/app/constants/urls";

type Props = { user: IUserModel };

const UserComponent: FC<Props> = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <Link href={
                {
                    pathname: urls.users.byId(id),
                    query: {data: JSON.stringify(user)}
                }
            }>
                {id}. {name}</Link>
        </div>
    );
};

export default UserComponent;