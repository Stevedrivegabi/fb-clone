import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase.js';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn =() => {
        // sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://download.logo.wine/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.png" 
                    alt=""
                />
                <img 
                    src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
                    alt=""/>
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button> 
        </div>
    )
}

export default Login
