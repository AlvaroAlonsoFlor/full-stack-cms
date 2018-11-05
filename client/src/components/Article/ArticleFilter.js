import React, {Fragment} from 'react';

const ArticleFilter = ({userNames, tags}) => {
    const userOptions = userNames.map((name) => {
        <option>{name}</option>
    })

    return (
   <Fragment>
       <select id="usernameoption">
           {userOptions}
       </select>
       
   </Fragment>
    )
}

export default ArticleFilter;