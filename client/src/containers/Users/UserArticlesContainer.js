import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';
import { Link } from 'react-router-dom';


const UserArticlesContainer = ({user}) => {
    
    if (!user) {
        return null
        
    }

    const articles = user.articles;
 

    return (
        <div>
            <Link to={{
          pathname: `${user.id}/articles/new`,
          state: {
              user: {user}
          }
          }}>Write a new article</Link>
             <UserArticlePreview articles={articles} user={user} />
        </div>
       

    
    );
}

export default UserArticlesContainer;