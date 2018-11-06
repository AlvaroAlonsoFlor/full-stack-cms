import React, {Component, Fragment} from 'react';

class ArticleFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterName: 'all',
            filterTag: 'all'
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleSubmitFilter = 
        this.handleSubmitFilter.bind(this);
    }

    handleUserChange(event) {
        this.setState({filterName: event.target.value}) 
    }

    handleTagChange(event) {
        this.setState({filterTag: event.target.value})
    }

    handleSubmitFilter(event) {
        event.preventDefault();
        this.props.onFilter(this.state.filterName, this.state.filterTag);   
    }

     render () {
     
            const userOptions = this.props.userNames.map((name, index) => {
                return <option select= "user-name-option" key={index} value={name} >{name}</option>
            })
        
            const tagOptions = this.props.tags.map((tag, index) => {
                return <option key = {index} value={tag}>{tag}</option>
            })
    return (
   <Fragment>
       <form id="filter-form">
       <select name="user-name-option"  value = {this.state.filterName} onChange = {this.handleUserChange}>
           <option value = "all">All Users</option>
           {userOptions}
       </select>
       <select id="tag-option" onChange = {this.handleTagChange}>
           <option value = "all">All Tags</option>
           {tagOptions}
       </select>
       <button type="submit" form="filter-form" value="Submit" onSubmit = {this.handleSubmitFilter}>Submit</button>
       </form>
   </Fragment>
    )
}
}

export default ArticleFilter;