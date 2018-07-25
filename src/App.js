import React from "react";
import Copyright from "./Copyright.js"

class App extends React.Component {
    render() {
        return (
            <div>
                <div class="title">
                    Core Fantasy Football
                </div>
                <div class="slogan">
                    Love it, bitches.
                </div>
                <Copyright />
            </div>
        );
    }
}

export default App;