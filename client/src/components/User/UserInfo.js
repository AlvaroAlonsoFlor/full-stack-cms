import React from 'react';
import { Link } from 'react-router-dom';
import Request from '../../helpers/Request'

const UserInfo = (props) => {
    let userEditUrl = '/users/' + props.user.id + '/edit';
    let userDeleteUrl = '/users/' + props.user.id

    function handleDelete() {
        // console.log(handleDelete)
        const request = new Request()
        request.delete(userDeleteUrl)
        
    }

    return (

        <div className="user-info">
            <h4 className="user-name">{props.user.name}</h4>
            <Link to={userEditUrl}>Edit User</Link>
            <button type="button" onClick={handleDelete}>Delete User</button>
        </div>
    );
}



export default UserInfo