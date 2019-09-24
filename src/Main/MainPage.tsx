import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route, Link, NavLink, withRouter } from "react-router-dom";
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
        label: "links",
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

function SideLabel(label: string) {
    return (
        <div className="sidelabel center-wrapper">
            <h1>{label}</h1>
        </div>
    )
}

class MainPage extends Component<any> {
    mainpage: React.RefObject<any>;
    wheelUpLength: number = 0;
    wheelDownLength: number = 0;
    linkUpBtn: HTMLDivElement | null = null;
    linkDownBtn: HTMLDivElement | null = null;
    doc: any;

    debounceTime: number = 0;
    wheelTimeout: any;
    //wheelStart: Date = new Date();

    scroller : any;

    bigScreen = window.matchMedia("(min-width: 1166px)");

    constructor(props: any) {
        super(props);
        this.mainpage = React.createRef();

        let bod = document.body; //IE 'quirks'
        this.doc = document.documentElement; //IE with doctype
        this.doc = (this.doc.clientHeight) ? this.doc : bod;

        this.scroller = this.screenWheeler(); //this.bigScreen.matches ? this.bigScreenWheeler() : this.smallScreenSwiper();
    }

    componentDidMount() {
        window.addEventListener('wheel', event => this.handleScroll(event));
    }
    
    componentWillUnmount() {
        window.removeEventListener('wheel', event => this.handleScroll(event));
    }

    handleScroll(event: any) {
        this.scroller(event);
    }

    // smallScreenSwiper() {
    //     return _.debounce((event: any) => {
    //         if (event.deltaX > 0) {
    //             let linkDown = pageDisplay[this.props.location.pathname].linkDown;
    //             if (linkDown) this.props.history.push(linkDown);
    //         } else {
    //             let linkUp = pageDisplay[this.props.location.pathname].linkUp;
    //             if (linkUp) this.props.history.push(linkUp);
    //         }
    
    //     }, 300);
    // }
    
    screenWheeler() {
        return  _.debounce((event: any) => {
            if (this.debounceTime !== 0) this.debounceTime = 0;

            if (this.bigScreen.matches) {
                this.doWheeling(event.deltaY);
            } else {
                this.doWheeling(event.deltaX);
            }  
            
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
                //console.log("wheeled up: " + this.wheelUpLength);
                
                if (this.bigScreen.matches) {
                    this.linkDownBtn.style.bottom = this.wheelUpLength + 'em';
                } else {
                    this.linkDownBtn.style.right = this.wheelUpLength + 'em';
                }
            }
        } else if (wheelLength < 0) {
            this.removeWheelDownIcon();
            if (this.linkUpBtn) {
                this.wheelDownLength -= wheelLength / 300;
                //console.log("wheeled down: " + this.wheelDownLength);
                
                if (this.bigScreen.matches) {
                    this.linkUpBtn.style.top = this.wheelDownLength + 'em';
                } else {
                    this.linkUpBtn.style.left = this.wheelDownLength + 'em';
                }
            }
        }

        if (this.wheelUpLength > 1.5) {
            //console.log("went down: " + this.wheelUpLength);
            let linkDown = pageDisplay[this.props.location.pathname].linkDown;
            if (linkDown) {
                this.props.history.push(linkDown);
                
                this.resetWheel();
            }
        } else if (this.wheelDownLength > 1.5) {
            //console.log("went up: " + this.wheelDownLength);
            let linkUp = pageDisplay[this.props.location.pathname].linkUp;
            if (linkUp) {
                this.props.history.push(linkUp);

                this.resetWheel();
            }
        }
    }

    resetWheel() {
        //console.log("RESET");
        if (this.bigScreen.matches) {
            this.removeWheelUpIcon();
            this.removeWheelDownIcon();
            this.clearWheelTimeout();
        } else {
            this.wheelDownLength = 0;
            this.wheelUpLength = 0;
        }
    }

    clearWheelTimeout() {
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = null;
    }

    removeWheelUpIcon() {
        this.wheelDownLength = 0;

        if (this.linkUpBtn) {
            this.linkUpBtn.style.transition = "1s";
            
            if (this.bigScreen.matches) {
                this.linkUpBtn.style.top = "0";
            } else {
                this.linkUpBtn.style.left = "0";
            }
        }
        setTimeout(() => {
            if (this.linkUpBtn) {
                this.linkUpBtn.style.transition = "none";
            }
        }, 1000);
    }

    removeWheelDownIcon() {
        this.wheelUpLength = 0;

        if (this.linkDownBtn) {
            this.linkDownBtn.style.transition = "1s";
            
            if (this.bigScreen.matches) {
                this.linkDownBtn.style.bottom = "0";
            } else {
                this.linkDownBtn.style.right = "0";
            }
        }
        setTimeout(() => {
            if (this.linkDownBtn) {
                this.linkDownBtn.style.transition = "none";
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
                {<Route path="/" component={AboutMeHeader} />}
                {/* <Route path="/resume/" component={ResumeHeader} />
                <Route path="/projects/" component={ProjectsHeader} /> */}

                <div className="content">
                    <PageTracker />

                    {this.bigScreen.matches ? null : SideLabel(pageDisplay[this.props.location.pathname].label)}

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

                </div>

                {this.bigScreen.matches ? SideLabel(pageDisplay[this.props.location.pathname].label) : null}
            </div>
        )
    }
}

export default withRouter(MainPage);