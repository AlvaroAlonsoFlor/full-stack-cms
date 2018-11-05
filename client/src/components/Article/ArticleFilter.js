import React, {Component, Fragment} from 'react';

class ArticleFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterTag: ''
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
    }

    handleUserChange(event) {
        this.setState({filterName: event.target.value})
        this.props.onFilters(event.target.value)
    }
    handleTagChange(event) {
        this.setState({filterTag: event.target.value})
        this.props.onFilters(event.target.value)
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
       <select name="user-name-option"  value = {this.state.filterName}onChange = {this.handleUserChange}>
           <option value = ""></option>
           {userOptions}
       </select>
       <select id="tag-option" onChange = {this.handleTagChange}>
           <option value = ""></option>
           {tagOptions}
       </select>
   </Fragment>
    )
}
}

export default ArticleFilter;