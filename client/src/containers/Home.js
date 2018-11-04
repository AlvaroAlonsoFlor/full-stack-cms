import React, {Component, Fragment} from 'react';

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
                <h4>Here renders the HomeNavBar</h4>
                <h4>Here renders the UsersList</h4>  
            </Fragment>
        );
    }
}