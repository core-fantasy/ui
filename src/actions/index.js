export const setLoggedIn = (state, providerName, loginCheckPerformedBy) => ({
    type: "SET_LOGGED_IN",
    state,
    providerName,
    loginCheckPerformedBy
});
