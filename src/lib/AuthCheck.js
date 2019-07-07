function authCheck(loggedInCallback, notLoggedInCallback, loginCheckErrorCallback) {

    fetch("/api/authorization/v1/authorized",
        {
            method: "GET",
            credentials: "same-origin",
        })
        .then(response => {
            if (response.ok) {
                loggedInCallback(response)
            }
            else {
                notLoggedInCallback(response)
            }
        })
        .catch(error => {loginCheckErrorCallback(error)})
}

export default authCheck;
