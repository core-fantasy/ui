import React from 'react'
import LoginController from "../containers/LoginController";
import '../index.css';
import authCheck from "../lib/AuthCheck";
import Copyright from "./Copyright";

const Landing = ({isLoggedIn, loginCheckPerformedBy, loginCheckCallback}) => {
    let thisName = "Landing";
    if (loginCheckPerformedBy !== thisName) {

        const loggedInCallback = (response) => {
            response
                .json()
                .then((data) => {
                    loginCheckCallback(true, data.provider, thisName)
                })
                .catch(error => {
                    console.error("Landing - Failed to parse auth check body. ", error);
                    loginCheckCallback(true, "unknown provider", thisName)
                });
        };

        authCheck(loggedInCallback,
            (response)=> {loginCheckCallback(false, "", thisName)},
            (error) => {console.error("Landing - check error: ", error)});
        return(<div/>);
    }
    else {
        if (! isLoggedIn) {
            return (<div>
                <div className="title">
                    Core Fantasy Football
                </div>
                <div className="slogan">
                    Enabling failure since 2019.
                </div>
                <div align="center"> {/* TODO: fix deprecation */}
                    <LoginController/>
                </div>
                <div>
                    <Copyright/>
                </div>
            </div>);
        }
        else {
            return (<div><LoginController/></div>);
        }
    }
};

export default Landing;
