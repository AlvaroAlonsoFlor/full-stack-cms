import React from 'react'
import Request from '../../helpers/Request'

const UserArticleDeleteButton = ({ user, article, onDelete }) => {

    function deleteArticle() {
        let articleDeleteUrl = `/articles/${article.id}`
        console.log(onDelete);
        const request = new Request()
        request.delete(articleDeleteUrl)
            .then(() => onDelete())
           
    }

    return (
        <button onClick={deleteArticle}>Delete Article</button>
    )
}

export default UserArticleDeleteButton;