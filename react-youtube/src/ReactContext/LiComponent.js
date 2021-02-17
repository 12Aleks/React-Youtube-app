import React from 'react'
import Button from "./Button";

const defaultStyle = {
    backgroundColor: 'red',
    
}

export default function LiComponent({user, onChange, styles}) {
    return(
        <li  style={user.status? styles.li : defaultStyle}><input type="checkbox"
                   checked={user.status}
                   onChange={() => onChange(user.id)}

        /> {user.id}. {user.name} - {user.age}<Button id={user.id}/></li>
    )
}