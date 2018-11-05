import React, {Fragment} from 'react';

const ArticleFilter = ({userNames, tags}) => {
    const userOptions = userNames.map((name, index) => {
        return <option key={index} value={name} >{name}</option>
    })

    const tagOptions = tags.map((tag, index) => {
        return <option key = {index} value={tag}>{tag}</option>
    })

    return (
   <Fragment>
       <form>
       <select id="user-name-option">
           <option value = ""></option>
           {userOptions}
       </select>
       <select id="tag-option">
           <option value = ""></option>
           {tagOptions}
       </select>
       </form>
   </Fragment>
    )
}

export default ArticleFilter;