import React, { Component, Fragment } from 'react';
import UserNavBar from '../../components/User/UserNavBar';
import UserArticlesContainer from './UserArticlesContainer';
import UserInfo from '../../components/User/UserInfo';


export default class UserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToRender: this.props.match.params.id,
            user: {}
        };
    }

    componentDidMount() {
        if (this.props.location.state) {
            return this.setState({user: this.props.location.state.user.user})
        }
        else {
        let url =  '/users/' + this.state.idToRender;
        fetch(url)
            .then(request => request.json())
            .then((data) => {this.setState({user: data})})
        }
        
    }

    render() {
        
        return(
            
            <Fragment>
                <UserNavBar user={this.state.user} /> 
                <UserInfo user={this.state.user} />
                <h4>Here renders UserInfo, remember to add the edit button linking to /user/id/edit</h4>
                <UserArticlesContainer user={this.state.user} /> 
            </Fragment>
        )
    }


}
// class UserContainer extends Component { 

//     constructor(props) {
//         super(props)
//     }
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             user: null;
//         } 
//     }

//     function saveData (data) {
//         console.log(data)
//         user = data 
      
//         return user;
//     }

    
//     if (!props.location.state) {
//         const id = props.match.params.id
//         let url =  '/users/' + id;
//         fetch(url)
//             .then(request => request.json())
//             .then((data) => saveData(data))
//         }
//         else{
//             user = props.location.state.user.user;
//         }
       

//      console.log(user);
//      if (!user) {
//          return null;
//      }
     

//     return (
//         <Fragment>
//             <UserNavBar user={user} /> 
//             <UserInfo user={user} />
//             <h4>Here renders UserInfo, remember to add the edit button linking to /user/id/edit</h4>
//             <UserArticlesContainer user={user} /> 
//         </Fragment>
//     )
// }

