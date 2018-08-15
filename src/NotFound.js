import React from 'react';
import Copyright from "./Copyright.js"

class NotFound extends React.Component {
    render() {
        return (
            <div>
                Couldn't find page {this.props.location.pathname}
                <Copyright/>
            </div>
        )
    }
}

export default NotFound;
