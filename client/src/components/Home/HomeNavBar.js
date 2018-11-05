import React from 'react';
import {Link} from 'react-router-dom';

const HomeNavBar = (props) => {
    
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/articles'>Articles</Link>
        </div>
                
            
    );
}

export default HomeNavBar;