import React from 'react';
import { Link } from 'react-router-dom';

const UserNavBar = (props) => {
    const userUrl = '/users/' + props.user.id;

    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to={userUrl}>{props.user.name}</Link>
                </li>
                <li>
                    <Link to='/articles'>All Articles</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserNavBar;