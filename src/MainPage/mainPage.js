import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import Copyright from "../Copyright.js"
import '../index.css';
import getCookie from '../cookies'

// TODO: https://www.npmjs.com/package/react-cookie

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.googleLoginSuccess = this.googleLoginSuccess.bind(this);
        this.googleLoginFailure = this.googleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
    }

    googleLoginSuccess(response) {
        let id_token = response.code;

        let xhr = new XMLHttpRequest();
        let host = window.location.hostname;
        xhr.open('POST', 'https://' + host + '/api/user/google');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = () => {
            console.log('Signed in as: ' + xhr.responseText);
            // // TODO: open user home
            // // window.location = "/user";
            this.setState({isLoggedIn: true});
        }
        xhr.onerror = () => {
            console.log("Failed yes: " + xhr.responseText);
            this.setState({isLoggedIn: true});
        }
        xhr.send(id_token);
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
                        Core Fantasy Footballt
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
                                responseType="code"
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