import { connect } from 'react-redux'
import Landing from "../presentation/Landing";


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.state,
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing)
