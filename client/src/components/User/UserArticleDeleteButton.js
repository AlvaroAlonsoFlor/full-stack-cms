import React from 'react'
import Request from '../../helpers/Request'

const UserArticleDeleteButton = ({ user, article }) => {

    function deleteArticle() {
        let articleDeleteUrl = `/articles/${article.id}`
        const request = new Request()
        console.log('trying to delete', articleDeleteUrl);
        request.delete(articleDeleteUrl)
    }

    return (
        <button onClick={deleteArticle}>Delete Article</button>
    )
}

export default UserArticleDeleteButton