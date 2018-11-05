import React from 'react';

const ArticlePreview = ({articles}) => {
  const articlePreviews = articles.map((article) => {
      return <div key = {article.id}>
           <h2>{article.title}</h2>
           <h4>{article.lead}</h4>
           <h3>by {article.user.name}</h3>
      </div>
  })

  return(
      <div>
      <h1>Articles</h1>
      {articlePreviews}
      </div>
  )
}

export default ArticlePreview;