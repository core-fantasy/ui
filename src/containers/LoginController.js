import { connect } from 'react-redux'
import {setLoggedIn} from "../actions";
import CompositeLoginLogout from "../presentation/CompositeLoginLogout";


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.state,
        loginProviderName: state.login.providerName
    };
};

const mapDispatchToProps = dispatch => ({
    postLogin: (loginProviderName) => dispatch(setLoggedIn(true, loginProviderName)),
    postLogout: () => dispatch(setLoggedIn(false, ""))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompositeLoginLogout)
