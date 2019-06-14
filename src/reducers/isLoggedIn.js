const isLoggedIn = (state = false, action) => {
    if (action.type === "SET_LOGGED_IN") {
        return action.loginState;
    }
    return state;
};

export default isLoggedIn;
