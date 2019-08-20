import React, { Component } from 'react';
import { Code, WorkOutline, EmailOutlined, PhoneOutlined } from '@material-ui/icons';

import './SectionSquares.scss';
import { Link } from 'react-router-dom';

function ResumeSquare() {
    return (
        <Link to="/resume/" className="link-square">
            <div className="resume square-wrapper center-wrapper">
                <h2>resume</h2>
                    <WorkOutline />
                <div className="links center-wrapper">
                    <h4>pdf</h4>
                    <h4>web</h4>
                </div>
            </div>
        </Link>
    )
}

function LinkedinSquare() {
    return (
        <div className="linkedin square-wrapper center-wrapper">
            <h2>linkedin</h2>
            <WorkOutline />
            <h4>linkedin.com/in/jyhwu</h4>
        </div>
    )
}

function DevpostSquare() {
    return (
        <div className="devpost square-wrapper center-wrapper">
            <h2>devpost</h2>
            <Code />
            <h4>devpost.com/jenniferyhwu</h4>
        </div>
    )
}

function GithubSquare() {
    return (
        <div className="github square-wrapper center-wrapper">
            <h2>github</h2>
            <Code />
            <h4>github.com/jenniferyhwu</h4>
        </div>
    )
}

export { ResumeSquare, LinkedinSquare, DevpostSquare, GithubSquare };