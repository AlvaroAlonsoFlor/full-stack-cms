import React, { Fragment } from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';
import { Link } from 'react-router-dom';
import UserArticleFilter from '../../components/User/UserArticleFilter';
import { Button } from 'bloomer/lib/elements/Button';



const UserArticlesContainer = ({ user, onFilter, articlesFiltered, onDelete }) => {

    if (!user) {
        return null

    }

    const articles = user.articles;

    return (
        <div>
            <Fragment>
                    <UserArticleFilter articles={articles} onFilter={onFilter} />
                    <UserArticlePreview onDelete={onDelete} articles={articlesFiltered} user={user} />
                <Button style={{ margin: 5 }}>
                    <Link to={{
                        pathname: `${user.id}/articles/new`,
                        state: {
                            user: { user }
                        }
                    }}>Write a new article</Link>
                </Button>
            </Fragment>
        </div>
    );
}

export default UserArticlesContainer;