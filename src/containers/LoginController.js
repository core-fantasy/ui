import { connect } from 'react-redux'
import TestLoginLogout from "../components/TestLoginLogout";
import {setLoggedIn} from "../actions";


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => ({
    postLogin: () => dispatch(setLoggedIn(true)),
    postLogout: () => dispatch(setLoggedIn(false))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestLoginLogout)
