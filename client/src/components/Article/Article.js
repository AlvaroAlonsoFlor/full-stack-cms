import React from 'react';

const Article = ({article}) => {
    return (
        <div>
        <h2>{article.title}</h2>
        <h3>{article.lead}</h3>
        <h4>{article.user.name}</h4>
        <p>{article.body}</p>
        </div>

    )

}

export default Article;