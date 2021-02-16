import React from 'react'


export default function LiContext({user}) {
    return(
        <li>{user.id}. {user.name}</li>
    )
}