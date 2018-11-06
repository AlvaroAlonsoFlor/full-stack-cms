import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = (props) => {
    let userEditUrl = '/users/' + props.id + '/edit';
    return (

        <div className="user-info">
            <h4 className="user-name">{props.user.name}</h4>
            <Link to={userEditUrl}>Edit User</Link>
            <button type="button">Delete User</button>
        </div>
        );
}

export default UserInfo