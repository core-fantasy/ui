import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class LoginLogout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.googleLoginSuccess = this.googleLoginSuccess.bind(this);
        this.googleLoginFailure = this.googleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
    }

    googleLoginSuccess(response) {
        console.log(response);
        let id_token = response.tokenId;

        console.log('Google token: ' + id_token);

        let requestBody = {
            "username": "abcd",  // username is ignored by the back end
            "password": id_token
        };

        fetch('/api/authorization/login', {
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
                this.setState({doRedirect:"login"});
            })
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

        return (
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
                    />
                )
                }
            </div>
        );
    }
}

export default LoginLogout;
