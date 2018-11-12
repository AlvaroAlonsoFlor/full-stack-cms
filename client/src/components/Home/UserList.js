import React from 'react';
import User from './User';
import { Columns } from 'bloomer/lib/grid/Columns';
import { Container } from 'bloomer/lib/layout/Container';

const UserList = ({users}) => {

    if (!users) {
        return null
    }
    const userList = users.map((user) => {
       return <User user={user} key={user.id} userId={user.id}/>
    });

    return (
        <Container isFluid style={{marginTop: 10}}>
            <Columns isCentered>
                {userList}
            </Columns>
        </Container>
    )
}

export default UserList;