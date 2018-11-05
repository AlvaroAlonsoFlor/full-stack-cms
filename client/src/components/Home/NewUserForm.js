import React from 'react';
import Request from '../../helpers/Request';
import {Redirect} from 'react-router-dom';

class NewUserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectNow: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }
   

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            "name": event.target.name.value,
            "password": event.target.name.value,
            "type": "EDITOR"

        }
        
        const request = new Request()
        this.handleRedirect();
        request.post('/users', user)
            .then(() => this.setState({redirectNow: true}))
        
        
    }

    handleRedirect() {
        if (this.state.redirectNow) {
            return <Redirect to='/'/>
        }
    }

    render() {
        
         return(
            <div>
                <h3>Introduce your user name and password to create the user</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="text" placeholder="Password" name="password"/>
                    
                    <button type="submit">Create</button>
                    {this.handleRedirect()}
                
                </form>
            </div>
        );
    }
   

     
}

// const NewUserForm = () => {
//     //pass type "EDITOR" by default, only admin changes that?

//     //name, password, type
//     //remember onSubmit={}


//     function handleRedirect() {
//         console.log('redirecting', redirectNow);
//         if (redirectNow) {
//             return <Redirect to='/' />
//         }
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         const user = {
//             "name": event.target.name.value,
//             "password": event.target.name.value,
//             "type": "EDITOR"

//         }
//         const request = new Request()
//         request.post('/users', user)
//             .then(() => redirectNow = true)
//             .then(() => handleRedirect())
        
//     }


//     return(
//         <div>
//             <h3>Introduce your user name and password to create the user</h3>

//           <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Name" name="name"/>
//             <input type="text" placeholder="Password" name="password"/>
            
//             <button type="submit">Create</button>
//             {handleRedirect()}
           
//           </form>
//         </div>
//     );

     
// }

export default NewUserForm;