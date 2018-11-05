import React, {Component, Fragment} from 'react';

export default class UserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToRender: this.props.match.params.id,
            user: {} // it will probably be a populated hash
        }
    }

    // we need to pass id param via props from Main.js

    componentDidMount() {
        // we use the id param for the request, props.id, pass idToRender
        let url =  '/users/' + this.state.idToRender;
        console.log(url);
        fetch(url)
            .then(request => request.json())
            .then((data) => {this.setState({user: data})})
    }

    render() {

        return(
            <Fragment>
                <h3>ID: {this.state.idToRender}</h3>
                <h4>Here renders UserNavBar</h4>
                <h4>Here renders UserInfo, remember to add the edit button linking to /user/id/edit</h4>
                <h4>Here renders UserArticlesContainer</h4>
            </Fragment>
        )
    }


}