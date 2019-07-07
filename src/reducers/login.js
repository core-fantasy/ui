const login = (state = {state: false, providerName: "", loginCheckPerformedBy: ""}, action) => {
    if (action.type === "SET_LOGGED_IN") {
        return Object.assign({}, state, {
            state: action.state,
            providerName: action.providerName,
            loginCheckPerformedBy: action.loginCheckPerformedBy
        });
    }
    return state;
};

export default login;
