import React, { Component } from 'react';
import { Code, WorkOutline, EmailOutlined, PhoneOutlined } from '@material-ui/icons';

import './SectionSquares.scss';
import { Link } from 'react-router-dom';

function ResumeSquare() {
    return (
        <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" className="link-square">
            <div className="resume square-wrapper center-wrapper">
                <h2>resume</h2>
                <WorkOutline />
                <h4>resume.pdf</h4>
            </div>
        </a>
    )
}

function LinkedinSquare() {
    return (
        <a href="https://linkedin.com/in/jyhwu/" target="_blank" className="link-square">
            <div className="linkedin square-wrapper center-wrapper">
                <h2>linkedin</h2>
                <WorkOutline />
                <h4>linkedin.com/in/jyhwu</h4>
            </div>
        </a>
    )
}

function DevpostSquare() {
    return (
        <a href="https://devpost.com/jenniferyhwu" target="_blank" className="link-square">
            <div className="devpost square-wrapper center-wrapper">
                <h2>devpost</h2>
                <Code />
                <h4>devpost.com/jenniferyhwu</h4>
            </div>
        </a>
    )
}

function GithubSquare() {
    return (
        <a href="https://github.com/jenniferyhwu" target="_blank" className="link-square">
            <div className="github square-wrapper center-wrapper">
                <h2>github</h2>
                <Code />
                <h4>github.com/jenniferyhwu</h4>
            </div>
        </a>
    )
}

export { ResumeSquare, LinkedinSquare, DevpostSquare, GithubSquare };