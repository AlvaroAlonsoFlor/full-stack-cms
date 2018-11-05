import React from 'react';

const User = ({user}) => {

    const name = user.name;
    const type = user.type;

    return (
        <li>
           {name}, {type}
        </li>
    )
}

export default User;