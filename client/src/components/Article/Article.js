import React from 'react';
import '../../Article.css';

const Article = (props) => {
   
    const thisArticle = props.location.state.article.article;
    const splitPara = thisArticle.body.split('\n').map((item, key) => {
        return <React.Fragment key={key}>{item}<br/><br/></React.Fragment>
      })
    return (
        <div>
        <h2>{thisArticle.title}</h2>
        <h3>{thisArticle.lead}</h3>
        <h4>{thisArticle.user.name}</h4>
        <p className = "article-body">{splitPara}</p>
        </div>

    )

}

export default Article;