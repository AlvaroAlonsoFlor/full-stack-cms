import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';


const UserArticlesContainer = ({user}) => {
    if (!user._embedded) {
        return null
        
    }

    //pass the user
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