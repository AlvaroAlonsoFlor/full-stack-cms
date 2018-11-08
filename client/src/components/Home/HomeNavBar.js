import React from 'react';

import {Navbar} from 'bloomer';

import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem';
import { NavbarLink } from 'bloomer/lib/components/Navbar/NavbarLink';


const HomeNavBar = (props) => {
    // <div>
    //         <Link to='/'>Home</Link>
    //         <Link to='/articles'>Articles</Link>
    //     </div>
    
    return(
        <div>
            <Navbar style={{backgroundColor: "#6B9080"}}>

                <NavbarItem href='/'>Home</NavbarItem>
                <NavbarItem href='/articles'> Articles </NavbarItem>
                
            </Navbar>
                
            
            
        
            
        </div>
        
        
                
            
    );
}

export default HomeNavBar;