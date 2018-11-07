import React from 'react'
import Request from '../../helpers/Request'

const UserArticleDeleteButton = ({ user, article }) => {

    function deleteArticle() {
        let ArticleDeleteUrl = `/articles/${article.id}`
        const request = new Request()
        request.delete(ArticleDeleteUrl)
    }

    return (
        <button onClick={deleteArticle}>Delete Article</button>
    )
}

export default UserArticleDeleteButton