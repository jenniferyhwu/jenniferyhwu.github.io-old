import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from "react-router-dom";
import { FullscreenExit, FaceOutlined, AssessmentOutlined, MessageOutlined, LaptopOutlined, Apps, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

import * as _ from 'lodash';

import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Grid from '../Grid/Grid';

import './MainPage.scss';
import Projects from '../Projects/Projects';
import { Slide } from '@material-ui/core';
import MyThreeComponent from '../Three/MyThreeComponent';
import AboutMeHeader from '../AboutMe/AboutMeHeader';
import ResumeHeader from '../Resume/ResumeHeader/ResumeHeader';
import ProjectsHeader from '../Projects/ProjectsHeader/ProjectsHeader';
import AboutMeThree from '../AboutMe/AboutMeThree';

const pageTrackerIcons: Array<any> = [
    //{icon: <Apps />, link: "/"},
    {icon: <FaceOutlined />, link: "/"},
    {icon: <AssessmentOutlined />, link: "/resume/"},
    //{icon: <MessageOutlined />, link: "/"},
    {icon: <LaptopOutlined />, link: "/projects/"}
];

const pageDisplay: any = {
    "/": {
        label: "about me",
        linkUp: null,
        linkDown: "/resume/",
    },
    "/resume/": {
        label: "resume",
        linkUp: "/",
        linkDown: "/projects/",
    },
    "/projects/": {
        label: "projects",
        linkUp: "/resume/",
        linkDown: null
    }
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
    mainpage: React.RefObject<any>;
    wheelUpLength: number = 0;
    wheelDownLength: number = 0;
    linkUpBtn: HTMLDivElement | null = null;
    linkDownBtn: HTMLDivElement | null = null;
    doc: any;

    debounceTime: number = 100;
    wheelTimeout: any;
    //wheelStart: Date = new Date();

    constructor(props: any) {
        super(props);
        this.mainpage = React.createRef();

        let bod = document.body; //IE 'quirks'
        this.doc = document.documentElement; //IE with doctype
        this.doc = (this.doc.clientHeight) ? this.doc : bod;
    }

    componentDidMount() {
        window.addEventListener('wheel', event => this.handleScroll(event));
    }
    
    componentWillUnmount() {
        window.removeEventListener('wheel', event => this.handleScroll(event));
    }

    handleScroll(event: any) {
        this.handleScrollHelper(event)();
    }
    
    handleScrollHelper(event: any) {
        return _.debounce(() => {
            if (this.debounceTime !== 100) this.debounceTime = 100;

            this.doWheeling(event.deltaY);
            
            this.clearWheelTimeout();
            this.wheelTimeout = setTimeout(() => {
                this.resetWheel();
            }, 100);
        }, this.debounceTime);
    };

    doWheeling(wheelLength: number) {
        if (wheelLength > 0) {
            this.removeWheelUpIcon();
            if (this.linkDownBtn) {
                this.wheelUpLength += wheelLength / 300;
                console.log("wheeled up: " + this.wheelUpLength);
                this.linkDownBtn.style.bottom = this.wheelUpLength + 'em';
            }
        } else if (wheelLength < 0) {
            this.removeWheelDownIcon();
            if (this.linkUpBtn) {
                this.wheelDownLength -= wheelLength / 300;
                console.log("wheeled down: " + this.wheelDownLength);
                this.linkUpBtn.style.top = this.wheelDownLength + 'em';
            }
        }

        if (this.wheelUpLength > 1.5) {
            console.log("went down: " + this.wheelUpLength);
            let linkDown = pageDisplay[this.props.location.pathname].linkDown;
            if (linkDown) {
                this.props.history.push(linkDown);
                
                this.resetWheel();
                this.debounceTime = 1000;
            }
        } else if (this.wheelDownLength > 1.5) {
            console.log("went up: " + this.wheelDownLength);
            let linkUp = pageDisplay[this.props.location.pathname].linkUp;
            if (linkUp) {
                this.props.history.push(linkUp);

                this.resetWheel();
                this.debounceTime = 500;
            }
        }
    }

    resetWheel() {
        console.log("RESET");
        this.removeWheelUpIcon();
        this.removeWheelDownIcon();
        this.clearWheelTimeout();
    }

    clearWheelTimeout() {
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = null;
    }

    removeWheelUpIcon() {
        this.wheelDownLength = 0;

        if (this.linkUpBtn) {
            this.linkUpBtn.style.transition = "1s";
            this.linkUpBtn.style.top = "0";
        }
        setTimeout(() => {
            if (this.linkUpBtn) {
                this.linkUpBtn.style.transition = "none";
                //this.linkUpBtn.style.display = "none";
            }
        }, 1000);
    }

    removeWheelDownIcon() {
        this.wheelUpLength = 0;

        if (this.linkDownBtn) {
            this.linkDownBtn.style.transition = "1s";
            this.linkDownBtn.style.bottom = "0";
        }
        setTimeout(() => {
            if (this.linkDownBtn) {
                this.linkDownBtn.style.transition = "none";
                //this.linkDownBtn.style.display = "none";
            }
        }, 1000);
    }

    goUpLink = () => {
        this.props.history.push(pageDisplay[this.props.location.pathname].linkUp);
    }

    goDownLink = () => {
        this.props.history.push(pageDisplay[this.props.location.pathname].linkDown);
    }

    render() {
        return (
            <div className="mainpage-wrapper center-wrapper" ref={this.mainpage}>
                {/* <Header locationPath={this.props.location.pathname}/> */}
                <Route path="/" exact component={AboutMeHeader} />
                <Route path="/resume/" component={ResumeHeader} />
                <Route path="/projects/" component={ProjectsHeader} />

                <div className="content">
                    <PageTracker />
                    
                    {/* <div className="fade-top"></div> */}

                    <div className="section" ref={this.mainpage}>
                        {pageDisplay[this.props.location.pathname].linkUp ? 
                            <div id="link-up-btn" className="center-wrapper" onClick={this.goUpLink} ref={el => this.linkUpBtn = el}>
                                <KeyboardArrowUp />
                            </div> 
                            : null
                        }

                        <Route path="/" exact component={AboutMe} />
                        <Route path="/resume/" component={Resume} />
                        <Route path="/projects/" component={Projects} />
                        <Route path="/threeplayground/" component={MyThreeComponent} />

                        {pageDisplay[this.props.location.pathname].linkDown ? 
                            <div id="link-down-btn" className="center-wrapper" onClick={this.goDownLink} ref={el => this.linkDownBtn = el}>
                                <KeyboardArrowDown />
                            </div>
                            : null
                        }
                    </div>
                    {/* {ReturnButton()} */}

                    {/* <div className="fade-bottom"></div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(MainPage);