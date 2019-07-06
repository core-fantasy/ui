import React from 'react';
import GoogleLoginLogout from "../presentation/GoogleLoginLogout";

// TODO: in the future add login with other providers (facebook, etc)

const CompositeLoginLogout = ({isLoggedIn, loginProviderName, postLogin, postLogout}) => {
    let widget;
    if (! isLoggedIn) {
        widget = <span>
            Log In/Sign Up With: <GoogleLoginLogout isLoggedIn={isLoggedIn} postLogin={postLogin} postLogout={postLogout}/>
        </span>
    }
    else {
        if (loginProviderName === "google") {
            widget = <span>
                <GoogleLoginLogout isLoggedIn={isLoggedIn} postLogin={postLogin} postLogout={postLogout}/>
            </span>
        }
        else {
            // TODO: handle unknown value
        }
    }
    return(<div>{widget}</div>);
};

export default CompositeLoginLogout;
