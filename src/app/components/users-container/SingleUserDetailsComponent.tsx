import React, {FC} from 'react';

import {IUserModel} from "@/app/models/IUserModel";

interface IProps {
    user: IUserModel
}

const SingleUserComponent: FC<IProps> = ({user: {id, name, email}}) => {
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export default SingleUserComponent;