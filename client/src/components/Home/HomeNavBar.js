import React from 'react';
import {Link} from 'react-router-dom';

const HomeNavBar = (props) => {
    
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/articles'>Articles</Link>
            </li>
        </ul>
    );
}

export default HomeNavBar;