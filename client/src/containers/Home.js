import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import HomeNavBar from '../components/Home/HomeNavBar';
import UserList from '../components/Home/UserList';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        // We might be able to refactor this to a stateless function
        //if we do the request in user list
        
        //Alison: I had to add projection here?
       fetch(`/users/?projection=embedArticle'`)
            .then(response => response.json())
            .then( users => this.setState({users: users._embedded}));
    }

    render() {
        return(
            <Fragment>
          
                <HomeNavBar />
                <UserList users={this.state.users.users}/>
                <Link to='users/create/new'>Create new user</Link>  
            </Fragment>
        );
    }
}