import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import Copyright from "../Copyright.js"
import '../index.css';
import getCookie from '../cookies'

// TODO: https://www.npmjs.com/package/react-cookie

// https://codeburst.io/theming-react-components-e0be23465946

// https://stackoverflow.com/questions/52261260/react-dynamic-themes

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.googleLoginSuccess = this.googleLoginSuccess.bind(this);
        this.googleLoginFailure = this.googleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
    }

    googleLoginSuccess(response) {
        console.log(response)
        let id_token = response.tokenId;

        console.log('Google token: ' + id_token)

        let requestBody = {
            "username": "abcd",  // username is ignored by the back end
            "password": id_token
        };

        fetch('/api/authorization/login', {
            method: "POST",
            credentials: "same-origin", // TODO: check that this is correct
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            redirect: "follow",
            body: JSON.stringify(requestBody)
        })
        // TODO: handle success and failure (failure looks the same as success, but with a different redirect location
            .then(response => console.log("Login success", JSON.stringify(response)))
            .catch(error => console.error("Error on login:", error))
    }

    googleLoginFailure(response) {
        console.log("Google sign in failure: " + response);
    }

    logout(response) {
        console.log("Google log out response: " + response);
        this.setState({isLoggedIn: false});
    }

    render() {
        if (getCookie("login-token").length > 0) {
        }
        return (
            <div>
                <div>
                    <div className="title">
                        Core Fantasy Football
                    </div>
                    <div className="slogan">
                        Enabling failure since 2018.
                    </div>
                    <Copyright />
                </div>

                <div>
                    {!this.state.isLoggedIn ? (
                        <div>
                            Log in with:
                            <GoogleLogin
                                clientId="269144609873-80g68v71m1omtih00nc9qt8l1i6drqmq.apps.googleusercontent.com"
                                buttonText="Google"
                                responseType="id_token"
                                onSuccess={this.googleLoginSuccess}
                                onFailure={this.googleLoginFailure}
                            />
                        </div>
                        ) : (
                        <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}
                        >
                        </GoogleLogout>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default MainPage;