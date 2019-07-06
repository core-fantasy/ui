const login = (state = {state: false, providerName: ""}, action) => {
    if (action.type === "SET_LOGGED_IN") {
        return Object.assign({}, state, {
            state: action.state,
            providerName: action.providerName});
    }
    return state;
};

export default login;
