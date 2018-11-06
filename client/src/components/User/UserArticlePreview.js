import React from 'react';
import { Link } from 'react-router-dom';

const UserArticlePreview = ({user}) => {
    console.log('user in preview', user);
  if (!user.articles) {
      return null;
  }
  
  const articles = user.articles
  
  const articlePreviews = articles.map((article) => {
      
      return <div className = "userArticlePreviews" key={article.title}>
      <Link to={{
          pathname: `${user.id}/articles/edit/${article.id}`,
          state: {
              article: {article},
              user: {user}
          }
          }}>{article.title}</Link>
           <h3>{article.lead}</h3>
           <h4>by {user.name} </h4>
      </div>
  })

  //remember to add delete button here
  console.log('articlePreviews', articlePreviews);
  return(
      <div>
      <h1>Articles</h1>
      {articlePreviews}
      </div>
  )
}

export default UserArticlePreview;