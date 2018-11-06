import React, {Component} from 'react'

export default class UserArticleFilter extends Component {
     constructor(props) {
             super(props)
             this.state = {
                 filterTag: 'all'
             };
    
        this.handleTagChange = this.handleTagChange.bind(this);        
    }

    handleTagChange(event) {
        this.setState({filterName: event.target.value}) 
    }

    render () {
     
        
        // const tagOptions = this.props.tags.map((tag, index) => {
        //     const uppercaseTag = tag.charAt(0).toUpperCase() + tag.slice(1); 
        //     return <option key = {index} value={tag}>{uppercaseTag}</option>
        // })
        
        return (
      
            // <select id="tag-option" onChange = {this.handleTagChange}>
            //     <option value = "all">All Tags</option>
            //     {tagOptions}
            // </select> 
            <h1>Here goes the filter</h1>
   
        )
}

    
}