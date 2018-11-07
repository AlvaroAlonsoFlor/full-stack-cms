import React from 'react';
import { Navbar } from 'bloomer/lib/components/Navbar/Navbar';
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem';

const UserNavBar = (props) => {
    const userUrl = '/users/' + props.user.id;

    return (
        <div>
            <Navbar style={{ backgroundColor: "#6B9080" }}>
                <NavbarItem id="navbarItem" href='/'>Home</NavbarItem>
                <NavbarItem style={{ color: "red" }} href={userUrl}>{props.user.name}</NavbarItem>
                <NavbarItem style={{ color: "white" }} href='/articles'>All Articles</NavbarItem>
            </Navbar>
        </div>
    )
}

export default UserNavBar;