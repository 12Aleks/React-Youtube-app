import React from 'react'
import LiContext from "./LiContext";
import {NewContext} from "./NewContext";

const listsStyle = {
    li: {
        listStyle: "none"
    }
}

export default function MainContext() {
    const [users, setUsers] = React.useState(
        [
            {id: 1, name: 'Alex', age: 20, status: false},
            {id: 2, name: 'John', age: 23, status: false},
            {id: 3, name: 'Tom', age: 24, status: false},
            {id: 4, name: 'Bob', age: 25, status: false},
        ]
    )

    return(
        <NewContext.Provider value={[users, setUsers]}>
        <div>
            <ul>
                {
                    users.map(user => {
                        return <LiContext user={user} list={listsStyle}/>
                    })
                }
            </ul>
        </div>
        </NewContext.Provider>
    )

}