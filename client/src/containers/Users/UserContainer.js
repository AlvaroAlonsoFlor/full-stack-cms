import React, {Component, Fragment} from 'react';
import UserNavBar from '../../components/User/UserNavBar';

export default class UserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToRender: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        let url =  '/users/' + this.state.idToRender;
        fetch(url)
            .then(request => request.json())
            .then((data) => {this.setState({user: data})})
    }

    render() {

        return(
            <Fragment>
                <h3>ID: {this.state.idToRender}</h3>
                <UserNavBar name={this.state.user.name} id={this.state.idToRender}/>
                <h4>Here renders UserInfo, remember to add the edit button linking to /user/id/edit</h4>
                <h4>Here renders UserArticlesContainer</h4>
            </Fragment>
        )
    }


}