import React from 'react'
import {NewContext} from "./NewContext";

export default function Button({id}) {
    const [users, setUsers] = React.useContext(NewContext);


    const deleteElement = () => {
        setUsers(users.filter(user => {
          return user.id !== id
        }))
    }

    return(
        <div>
            <button onClick={deleteElement}>Delete</button>
        </div>
    )
}