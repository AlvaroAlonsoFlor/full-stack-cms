import React from 'react';
import ArticlePreview from '../../components/Article/ArticlePreview';

const UserArticlesContainer = ({articles}) => {

    if (!articles) {
        return null
    }



    return (
        <div>
            <h3>We will need to add another ArticlePreview leading to edit</h3>
             <ArticlePreview articles={articles.articles} />
        </div>
       

    
    );
}

export default UserArticlesContainer;