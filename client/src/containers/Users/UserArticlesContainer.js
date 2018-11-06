import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';


const UserArticlesContainer = ({user}) => {
    if (!user._embedded) {
        return null
        
    }

    const articles = user._embedded.articles;

    return (
        <div>
            <h3>We will need to add another ArticlePreview leading to edit</h3>
             <UserArticlePreview articles={articles} user={user} />
        </div>
       

    
    );
}

export default UserArticlesContainer;