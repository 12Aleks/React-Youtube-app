import React from 'react'
import {NewContext} from "./NewContext";
import LiComponent from "./LiComponent";
import AddComponent from "./AddComponent";

const styles = {
    li:{
       backgroundColor: 'green',
       color: 'white',
       textTransform: 'uppercase'
    }
}

export default function Index() {
    const [users, setUsers] = React.useState(
        [
            {id: 1, name: 'Alex', age: 20, status: false},
            {id: 2, name: 'John', age: 23, status: true},
            {id: 3, name: 'Tom', age: 24, status: false},
            {id: 4, name: 'Bob', age: 25, status: false},
        ]
    );

    const changeStatus = (id) => {
     setUsers(users.map(user => {
            if(user.id === id){
                user.status = !user.status;
            }
            return user
        }))
    }
    const sendForm = ({name, age}) => {
        setUsers(users.concat([
               {
                   id: users.length + 1,
                   name,
                   age,
                   status: false
               }
           ])
        )
    }

    return (
        <NewContext.Provider value={[users, setUsers]}>
            <AddComponent sendForm={sendForm}/>
            <hr />
        <div>
            <ul>
                {
                    users.map(user => {
                        return <LiComponent user={user} onChange={changeStatus} key={user.id} styles={styles}/>
                    })
                }
            </ul>
        </div>
        </NewContext.Provider>
    )
}