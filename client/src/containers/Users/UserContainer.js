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
            <UserArticlesContainer articles={user._embedded} />
        </Fragment>
    )
}
export default UserContainer