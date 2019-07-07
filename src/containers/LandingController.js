import { connect } from 'react-redux'
import Landing from "../presentation/Landing";
import {setLoggedIn} from "../actions";

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.state,
        loginCheckPerformedBy: state.login.loginCheckPerformedBy
    };
};

const mapDispatchToProps = dispatch => ({
    loginCheckCallback: (isLoggedIn, providerName, loginCheckPerformedBy) => (dispatch(setLoggedIn(isLoggedIn, providerName, loginCheckPerformedBy)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing)
