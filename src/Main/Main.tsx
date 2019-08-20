import React, { Component } from 'react';
import { Code, WorkOutline, EmailOutlined, PhoneOutlined } from '@material-ui/icons';

import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main-wrapper center-wrapper">
                <h2>about me</h2>
                <div className="icons">
                    <Code></Code>
                    <WorkOutline></WorkOutline>
                    <EmailOutlined></EmailOutlined>
                    <PhoneOutlined></PhoneOutlined>
                </div>
            </div>
        )
    }
}

export default Main;