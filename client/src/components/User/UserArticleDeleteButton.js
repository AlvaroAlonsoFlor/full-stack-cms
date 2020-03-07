import React from 'react'
import Request from '../../helpers/Request'
import { Button } from 'bloomer/lib/elements/Button';

const UserArticleDeleteButton = ({ user, article, onDelete }) => {

    function deleteArticle() {
        let articleDeleteUrl = `/articles/${article.id}`
        console.log(onDelete);
        const request = new Request()
        request.delete(articleDeleteUrl)
            .then(() => onDelete())
           
    }

    return (
        <Button onClick={deleteArticle}>Delete Article</Button>
    )
}

export default UserArticleDeleteButton;