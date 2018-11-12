import React from 'react';
import { Link } from 'react-router-dom';
import { Tile } from 'bloomer/lib/grid/Tile';
import { Box } from 'bloomer/lib/elements/Box';
import { Title } from 'bloomer/lib/elements/Title';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import UserArticleDeleteButton from './UserArticleDeleteButton';
import { Button } from 'bloomer/lib/elements/Button';

const UserArticlePreview = ({ user, articles, onDelete }) => {
    if (!user.articles || !articles) {
        return null;
    }

    const articlePreviews = articles.map((article) => {

        return <Tile isParent size={6} style={{ minWidth: 300 }}>
            <Tile isChild size={12} style={{ color: '#6B9080' }} key={article.id} render={
                props => (
                    <Box {...props}>
                        <Title style={{ color: '#6B9080' }}>
                            {article.title}
                        </Title>
                        <Subtitle style={{ color: '#628375' }}>
                            {article.lead}
                        </Subtitle>
                        Author: {user.name}
                        <p>
                            Tag: {article.tag}
                        </p>
                        <UserArticleDeleteButton onDelete = {onDelete} user={user} article={article}/>
                        <Button style={{marginLeft: 10}}><Link to={{
                            pathname: `${user.id}/articles/edit/${article.id}`,
                            state: {
                            article: {article},
                            user: {user}
                            }
                            }}>Go to article</Link></Button>
                    </Box>
                )
            }></Tile>
        </Tile>
    });

<<<<<<< HEAD

=======
>>>>>>> development
    return (
        <div>
            <Title isSize={4} style={{textAlign: "center"}}>Articles</Title>
            {articlePreviews}
        </div>
    )
}

export default UserArticlePreview;