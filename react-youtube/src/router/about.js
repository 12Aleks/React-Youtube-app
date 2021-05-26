import React from 'react';
import {Redirect} from "react-router-dom";

const About = ({auth}) => {
    const isAuth = auth;
    console.log(isAuth)
    return (

        <div>
            {isAuth ? <div><h1>About</h1></div> : <Redirect to={'/'}></Redirect>}
        </div>
    );
};

export default About;
