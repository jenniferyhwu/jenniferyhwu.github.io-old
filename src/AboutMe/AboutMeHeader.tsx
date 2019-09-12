import React, { Component } from "react";
import { Link } from "react-router-dom";

import { GithubSquare, DevpostSquare, LinkedinSquare, ResumeSquare } from "./SectionSquares";

import './AboutMeHeader.scss';
import { Search } from "@material-ui/icons";

const contentItems = [
    [
        { component: GithubSquare},
        { component: DevpostSquare}
    ],
    [
        { component: LinkedinSquare},
        { component: ResumeSquare}
    ]
]

class LinkImage extends Component<{caption: string}, {}> {
    render() {
        return (
            <div className="link-image">
                <figure>
                    <figcaption className="side"></figcaption>
                    <figcaption className="front">{ this.props.caption }</figcaption>
                </figure>
            </div>
        )
    }
}

class Biography extends Component {
    render() {
        return (
            <div className="biography">

            </div>
        )
    }
}

class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <h5>nice to meet you :)</h5>
                {/* <div className="bar">
                    <Search id="search-icon" /> 
                    <input type="text"></input>
                </div> */}
            </div>
        )
    }
}

class AboutMeHeader extends Component {
    render() {
        return (
            <div className="aboutmeheader-wrapper">
                <h1 className="section-header">about me</h1>
                <Searchbar />
                
                {/* <div className="links">
                    <LinkImage caption="github" />
                    <LinkImage caption="resume" />
                    <LinkImage caption="linkedin" />
                    <LinkImage caption="contact" />
                </div> */}
            </div>
        )
    }
}

export default AboutMeHeader;