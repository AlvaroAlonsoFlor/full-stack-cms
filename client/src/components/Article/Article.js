import React from 'react';

const Article = (props) => {
    // conso
    const thisArticle = props.location.state.article.article;
    return (
        <div>
        <h2>{thisArticle.title}</h2>
        <h3>{thisArticle.lead}</h3>
        <h4>{thisArticle.user.name}</h4>
        <p>{thisArticle.body}</p>
        </div>

    )

}

export default Article;