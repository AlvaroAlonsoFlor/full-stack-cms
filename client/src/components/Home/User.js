import React from 'react';
import {Link} from 'react-router-dom';

const User = (props) => {

    const name = props.user.name;
    const type = props.user.type;
    const path = `/users/${props.user.id}`

    return (
        <li>
            <Link to={path}>{name}, {type}</Link>
           
        </li>
    )
}

export default User;