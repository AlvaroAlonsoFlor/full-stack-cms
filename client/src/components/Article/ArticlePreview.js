import React, {Link} from 'react';

const ArticlePreview = ({articles}) => {
  const articlePreviews = articles.map((article) => {
      return <div className = "articlePreviews" key = {article.id}>
           {/* <h2><Link to = "/articles/{article.id}">{article.title}</Link></h2> */}
           <h3>{article.lead}</h3>
           <h4>by {article.user.name} </h4>
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