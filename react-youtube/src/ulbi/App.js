import React, {useState} from "react";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover.jsx";
import List from "./components/List";

const Apps = () => {
    const username = useInput('');
    const password = useInput('');




    return (
        <div>
            <input {...username} type="text" placeholder='username'/>
            <input {...password} type="text" placeholder='password' />
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
            <Hover/>
            <List/>
        </div>
    );
};

export default Apps;
