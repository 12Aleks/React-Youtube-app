import React from 'react'
import User from "./User";


export default class ListUsers extends React.Component{

   state = {
       users: [
                   {id: 1, name: 'Alex', age: 20, status: false},
                   {id: 2, name: 'John', age: 23, status: false},
                   {id: 3, name: 'Tom', age: 24, status: false},
                   {id: 4, name: 'Bob', age: 25, status: false},
               ]
    };
    deleteElement = (id) =>{
        this.setState(prevState => ({
            users: prevState.users.filter(user => user.id !== id )
        }));
    };
    render() {
        return(
            <ul>
                {
                    this.state.users.map(user => (
                        <User user={user} key={user.id} deleteElement={this.deleteElement}/>
                    ))
                }
            </ul>

        )
    }
}