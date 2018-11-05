import React from 'react';
import {Link} from 'react-router-dom';

const User = ({user}) => {

    const name = user.name;
    const type = user.type;
    const path = `/users/${user.id}`

    return (
        <li>
            <Link to={path}>{name}, {type}</Link>
           
        </li>
    )
}

export default User;