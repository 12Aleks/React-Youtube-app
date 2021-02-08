import React from 'react'
import User from "./User";
import './Style.css'
import AddUser from "./AddUser";


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

    addedUsers = ({name, age}) => {
        this.setState(prevState => ({
            users: prevState.users.concat([
                {
                    id: (this.state.users.length + 1),
                    name,
                    age,
                    status: false
                }
            ])
        }))
    };

    render() {
        return(
            <div>
                <AddUser addedUsers={this.addedUsers}/>
                <table className="blockWrapper" >
                    <thead>
                    <tr>
                        <td>Number</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Delete element</td>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.users.map(user => (
                        <User user={user} key={user.id} deleteElement={this.deleteElement}/>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}