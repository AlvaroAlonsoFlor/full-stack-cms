import React, { Fragment } from 'react';
import UserNavBar from '../../components/User/UserNavBar';
import UserArticlesContainer from './UserArticlesContainer';
import UserInfo from '../../components/User/UserInfo';

const UserContainer = (props) => {
    const user = props.location.state.user.user;

    return (
        <Fragment>
            <UserNavBar user={user} />
            <UserInfo user={user} />
            <h4>Here renders UserInfo, remember to add the edit button linking to /user/id/edit</h4>
            <UserArticlesContainer user={user} />
        </Fragment>
    )
}
export default UserContainer
