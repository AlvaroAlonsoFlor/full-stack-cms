import React, {Fragment} from 'react';

const ArticleFilter = ({userNames, tags}) => {
    const userOptions = userNames.map((name, index) => {
        return <option key={index} >{name}</option>
    })

    const tagOptions = tags.map((tag, index) => {
        return <option key = {index}>{tag}</option>
    })

    return (
   <Fragment>
       <select id="user-name-option">
           <option value = ""></option>
           {userOptions}
       </select>
       <select id="tag-option">
           <option value = ""></option>
           {tagOptions}
       </select>
       
   </Fragment>
    )
}

export default ArticleFilter;