import React, {Component, Fragment} from 'react';
import HomeNavBar from '../components/Home/HomeNavBar';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        // make request to users here
    }

    render() {
        return(
            <Fragment>
                <HomeNavBar />
                <h4>Here renders the UsersList</h4>  
            </Fragment>
        );
    }
}