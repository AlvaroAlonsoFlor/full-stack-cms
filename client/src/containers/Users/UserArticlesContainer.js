import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';
import { Link } from 'react-router-dom';
import UserArticleFilter from '../../components/User/UserArticleFilter';


const UserArticlesContainer = ({user, onFilter, articlesFiltered, onDelete}) => {
    
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
             <UserArticleFilter articles={articles} onFilter={onFilter}/>
             <UserArticlePreview onDelete={onDelete} articles={articlesFiltered} user={user} />
        </div>
       

    
    );
}

export default UserArticlesContainer;