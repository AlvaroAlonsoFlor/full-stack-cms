import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';


const UserArticlesContainer = ({user}) => {
    console.log(user);
    
    // if (!user._embedded) {
    if (!user) {
        return null
        
    }

    // const articles = user._embedded.articles;
    const articles = user.articles;
    console.log(articles);

    //remember to add delete button here
    return (
        <div>
            <h3>We will need to add another ArticlePreview leading to edit</h3>
             <UserArticlePreview articles={articles} user={user} />
        </div>
       

    
    );
}

export default UserArticlesContainer;