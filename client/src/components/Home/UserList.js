import React from 'react';
import User from './User';

const UserList = ({users}) => {
    const userList = users.map((user, key) => {
       return <User user={user} key={key}/>
    });


    return (
        <ul>
            {userList}
        </ul>
    )
}

export default UserList;