import React from 'react';

function login(callback) {
    callback();
    console.log("test login")
}

function logout(callback) {
    callback();
    console.log("test logout")
}

const TestLoginLogout = ({isLoggedIn, postLogin, postLogout}) => {
    let button;
    if (! isLoggedIn) {
        button = <button onClick={(event => {login(postLogin)})}>Test Login</button>
    }
    else {
        button = <button onClick={(event) => {logout(postLogout)}}>Logout</button>
    }

    return (
        <div>{button}</div>
    )
};

export default TestLoginLogout;
