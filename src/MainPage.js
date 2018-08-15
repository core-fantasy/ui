import React from 'react';
import Copyright from "./Copyright.js"
import { Link } from "react-router-dom";

import './index.css';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div class="title">
                        Core Fantasy Football
                    </div>
                    <div class="slogan">
                        Enabling failure since 2018.
                    </div>
                    <Copyright />
                </div>

                <div>
                    { /* TODO: change to Google/Facebook/etc login */ }
                    <Link to="/userHome">Log In</Link>
                </div>
            </div>
        );
    }
}

export default MainPage;