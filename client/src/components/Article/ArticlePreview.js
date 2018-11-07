import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'bloomer/lib/components/Card/Card';
import { CardContent } from 'bloomer/lib/components/Card/CardContent';
import { Title } from 'bloomer/lib/elements/Title';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { CardFooter } from 'bloomer/lib/components/Card/Footer/CardFooter';
import { CardFooterItem } from 'bloomer/lib/components/Card/Footer/CardFooterItem';

const ArticlePreview = ({articles}) => {
   
    
  const articlePreviews = articles.map((article) => {
    return <Card style={{height: 350, width:350, margin: 10}} key={article.id}>
        <CardContent>
            <Title>
               {article.title} 
            </Title>
            <Subtitle>
                 {article.lead}
            </Subtitle>
            {article.user.name}
        <CardFooter>
            <CardFooterItem>
            <Link to={{
                pathname: `/articles/${article.id}`,
                state: {
              article: {article}
                  }
            }}>Read More </Link>
                 
            </CardFooterItem>
             
        </CardFooter>
    </CardContent>
</Card>
    
  })

  return(
      <div>
      <h1>Articles</h1>
      {articlePreviews}
      </div>
  )
}

export default ArticlePreview;