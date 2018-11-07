import React from 'react';
import { Link } from 'react-router-dom';
import UserArticleDeleteButton from './UserArticleDeleteButton';

const UserArticlePreview = ({user, articles, onDelete}) => {
  if (!user.articles || !articles) {
      return null;
  }
  
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
           <h4>{article.tag}</h4>
           <UserArticleDeleteButton onDelete={onDelete} user={user} article={article}/>
      </div>
  })

  return(
      <div>
      <h1>Articles</h1>
      {articlePreviews}
      </div>
  )
}

export default UserArticlePreview;