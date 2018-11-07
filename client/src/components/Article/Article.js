import React from 'react';
import '../../Article.css';
import HomeNavBar from '../Home/HomeNavBar';
import Request from '../../helpers/Request';

const Article = (props) => {
   
    const thisArticle = props.location.state.article.article;

    function handlearticleViews () {
        const views = thisArticle.views + 1;
        console.log(views)
         const request = new Request()
         request.patch(`/articles/${thisArticle.id}`, {
             views: views
         })
    }
    const splitPara = thisArticle.body.split('\n').map((item, key) => {
        return <React.Fragment key={key}>{item}<br/><br/></React.Fragment>
      })
    return (
        <div>
        handlearticleViews()
        <HomeNavBar/>
        <h2>{thisArticle.title}</h2>
        <h3>{thisArticle.lead}</h3>
        <h4>{thisArticle.user.name}</h4>
        <p className = "article-body">{splitPara}</p>
        </div>

    )

}

export default Article;