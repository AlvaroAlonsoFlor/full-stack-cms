import React from 'react';
import { Link } from 'react-router-dom';

const UserNavBar = (props) => {
    let userUrl = '/users/' + props.id;

    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to={userUrl}>{props.name}</Link>
            </li>
            <li>
                <Link to='/articles'>All Articles</Link>
            </li>
        </ul>
    );
}

export default UserNavBar;