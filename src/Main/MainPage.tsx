import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from "react-router-dom";
import { FullscreenExit, FaceOutlined, AssessmentOutlined, MessageOutlined, LaptopOutlined, Apps } from '@material-ui/icons';

import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Grid from '../Grid/Grid';

import './MainPage.scss';
import Projects from '../Projects/Projects';
import { Slide } from '@material-ui/core';

const pageTrackerIcons: Array<any> = [
    //{icon: <Apps />, link: "/"},
    {icon: <FaceOutlined />, link: "/"},
    {icon: <AssessmentOutlined />, link: "/resume/"},
    //{icon: <MessageOutlined />, link: "/"},
    {icon: <LaptopOutlined />, link: "/projects/"}
];

const pageDisplay: {[index: string]: string} = {
    "/": "about me",
    "/resume/": "resume",
    "/projects/": "projects"
}

function ReturnButton() {
    return (
        <Link to="/">
            <div id="return-to-grid">
                <FullscreenExit />
                <p>zoom out to return to grid</p>
            </div>
        </Link>
    )
}

class Header extends Component<{locationPath: string}, {}> {
    render() {
        return (
            <div className="header">
                <h1>{pageDisplay[this.props.locationPath]}</h1>
            </div>
        )
    }
}

function Circle(icon: JSX.Element) {
    return (
        <div className="tracker-line center-wrapper">
            <div className="circle-wrapper">
                <div className="circle transparent-bg center-wrapper">
                    {icon}
                </div>
            </div>
        </div>
    )
}

class PageTracker extends Component {
    render() {
        return (
            <div className="page-tracker center-wrapper">
                {pageTrackerIcons.map((iconObject, i: number) => {
                    return (
                        <NavLink to={iconObject.link} exact={true} activeClassName="tracker-active" key={i}>
                             {Circle(iconObject.icon)}
                        </NavLink>
                    )
                })}
            </div>
        )
    }
}

class MainPage extends Component<any> {
    render() {
        return (
            <div className="mainpage-wrapper center-wrapper">
                <Header locationPath={this.props.location.pathname}/>

                <div className="content">
                    <PageTracker />
                    
                    {/* <div className="fade-top"></div> */}

                    <div className="section">
                        <Route path="/" exact component={AboutMe} />
                        <Route path="/resume/" component={Resume} />
                        <Route path="/projects/" component={Projects} />
                    </div>
                    {/* {ReturnButton()} */}

                    {/* <div className="fade-bottom"></div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(MainPage);