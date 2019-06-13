function authCheck() {

    fetch("/api/authorization/authorized", {
        method: "GET",
        credentials: "same-origin",
    })
        .then(response => { /* Load page. */})
        .catch(/* Redirect to login */)
}

export default authCheck;
