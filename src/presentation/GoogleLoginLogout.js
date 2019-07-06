import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

function googleLoginSuccess(response, postLoginCallback) {
    console.log("Google response: ", response);
    let id_token = response.tokenId;

    console.log('Google token: ' + id_token);

    let requestBody = {
        "username": "abcd",  // username is ignored by the back end
        "password": id_token
    };

    fetch('/api/authorization/login',
        {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            redirect: "follow",
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            console.log("Login success. Response code: %d. Body: %s.", response.status, JSON.stringify(response));
            postLoginCallback("google");
        })
        .catch(error => console.error("Error on login:", error))
}

function googleLoginFailure(response) {
    console.log("Google sign in failure: " + response);
}

function logout(response, postLogoutCallback) {
    console.log("Logged out");
    fetch('/api/authorization/logout',
        {
            method: "POST",
            redirect: "follow"
        })
        .then(response => {
            console.log("Logout success. Response code: %d. Body: %s.", response.status, JSON.stringify(response));
            postLogoutCallback();
        })
        .catch(error => console.error("Error on login:", error))
}

const GoogleLoginLogout = ({isLoggedIn, postLogin, postLogout}) => {
    let widget;

    if (!isLoggedIn) {
        widget = <GoogleLogin
            clientId="269144609873-80g68v71m1omtih00nc9qt8l1i6drqmq.apps.googleusercontent.com"
            buttonText="Google"
            responseType="id_token"
            onSuccess={(response)=>{googleLoginSuccess(response, postLogin)}}
            onFailure={googleLoginFailure}
        />
    } else {
        widget = <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={(response)=>{logout(response, postLogout)}}
        />
    }

    return (<span>{widget}</span>);
};

export default GoogleLoginLogout;
