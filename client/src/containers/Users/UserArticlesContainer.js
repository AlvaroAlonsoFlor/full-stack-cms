import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';
import { Link } from 'react-router-dom';


const UserArticlesContainer = ({user}) => {
    
    // if (!user._embedded) {
    if (!user) {
        return null
        
    }

    // const articles = user._embedded.articles;
    const articles = user.articles;
    console.log(user);

    //remember to add delete button here
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