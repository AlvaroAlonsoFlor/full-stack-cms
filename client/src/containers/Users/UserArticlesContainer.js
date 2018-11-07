import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';
import { Link } from 'react-router-dom';
import UserArticleFilter from '../../components/User/UserArticleFilter';
import { Container } from 'bloomer/lib/layout/Container';
import { Button } from 'bloomer/lib/elements/Button';
import { Section } from 'bloomer/lib/layout/Section';


const UserArticlesContainer = ({user, onFilter, articlesFiltered, onDelete}) => {
    
    if (!user) {
        return null
        
    }

    const articles = user.articles;
    
    return (
        <div>
            <Container>
                <Section>
                    <Button>
                        <Link to={{
                            pathname: `${user.id}/articles/new`,
                            state: {
                                user: { user }
                            }
                        }}>Write a new article</Link>
                    </Button>
                </Section>
                <Section>
                    <UserArticleFilter articles={articles} onFilter={onFilter} />
                </Section>
                <Section>
                    <UserArticlePreview onDelete={onDelete} articles={articlesFiltered} user={user} />
                </Section>
            </Container>
        </div>
    );
}

export default UserArticlesContainer;