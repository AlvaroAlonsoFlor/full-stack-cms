import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'bloomer/lib/elements/Title';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { Tile } from 'bloomer/lib/grid/Tile';
import { Box } from 'bloomer/lib/elements/Box';

const ArticlePreview = ({articles}) => {
    
  const articlePreviews = articles.map((article) => {
  
        return <Tile isParent size={6} style={{minWidth: 300}}>
            <Tile isChild  size={12} style={{ color: '#6B9080'}} key={article.id} render= {
                props => (
                    <Box {...props}>
                        <Title style={{color: '#6B9080'}}>
                            {article.title} 
                        </Title>
                    <Subtitle style={{color:'#628375'}}> 
                        {article.lead}
                    </Subtitle>
                        Author: {article.user.name}
                    <p>
                        Tag: {article.tag}
                    </p>
                    <Link to={{
                        pathname: `/articles/${article.id}`,
                        state: {
                        article: {article}
                        }
                    }}>Read More </Link>
                  </Box>
                )
        }>
            </Tile>
        </Tile>
     })

    return(
        <React.Fragment>
           {articlePreviews}
        </React.Fragment>
    )
}

export default ArticlePreview;