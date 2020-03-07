import React from 'react';
import { Navbar } from 'bloomer/lib/components/Navbar/Navbar';
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem';

const UserNavBar = (props) => {
    const userUrl = '/users/' + props.user.id;

    return (
        <div>
            <Navbar style={{ backgroundColor: "#6B9080" }}>
                <NavbarItem href='/'>Home</NavbarItem>
                <NavbarItem href={userUrl}>{props.user.name}</NavbarItem>
                <NavbarItem href='/articles'>All Articles</NavbarItem>
            </Navbar>
        </div>
    )
}

export default UserNavBar;