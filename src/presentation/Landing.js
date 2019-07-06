import React from 'react'
import LoginController from "../containers/LoginController";
import '../index.css';

const Landing = () => (
    <div>
        <div className="title">
            Core Fantasy Football
        </div>
        <div className="slogan">
            Enabling failure since 2019.
        </div>
        <div align="center">
            <LoginController/>
        </div>
    </div>
);

export default Landing;
