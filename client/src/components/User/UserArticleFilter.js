import React, {Component} from 'react'

export default class UserArticleFilter extends Component {
     constructor(props) {
             super(props)
             this.state = {
                 articles: null,
                 filterTag: 'all',
             };
    
        this.handleTagChange = this.handleTagChange.bind(this);
        this.filterTagsForSelectMenu = this.filterTagsForSelectMenu.bind(this);        
    }

    filterTagsForSelectMenu() {
        if (!this.props.articles) {
            return;
        }

        const tags = [];
        this.props.articles.map((article) => {

            if (!tags.includes(article.tag)) {
                return tags.push(article.tag)
            }
            return null;
        })
        return tags.map((tag, index) => {
            const uppercaseTag = tag.charAt(0).toUpperCase() + tag.slice(1); 
            return <option key = {index} value={tag}>{uppercaseTag}</option>
        })
    }

    handleTagChange(event) {
        this.setState({filterTag: event.target.value}) 
        this.props.onFilter(event.target.value)
    }

    render () {
        
        if (!this.props.articles) {
            return null
        }
        const tagOptions = this.filterTagsForSelectMenu()
    
        return (
            <div>
                <label name="tag-filter">Filter by tag</label>
                 <select id="tag-option" name="tag-filter" onChange = {this.handleTagChange}>
                    <option value = "all">All Tags</option>
                    {tagOptions}
                </select> 
            </div>
      
           
   
        )
}

    
}