import React from 'react';
import './Login.css';

import LoginForm from './LoginForm';

export default function Login() {    
    return (
        <div>
            {
            sessionStorage.getItem("isLoggedIn") == "true" 
            ?
            <h6 className = "message"> Logged In </h6>
            :
            <LoginForm/>
            }
        </div>
    );
}