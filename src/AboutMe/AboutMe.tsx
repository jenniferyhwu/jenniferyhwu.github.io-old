import React, { Component } from "react";
import { Link } from "react-router-dom";

import { GithubSquare, DevpostSquare, LinkedinSquare, ResumeSquare } from "./SectionSquares";

import './AboutMe.scss';

const contentItems: any = [
    { component: GithubSquare},
    { component: DevpostSquare},
    { component: LinkedinSquare},
    { component: ResumeSquare}
]

function returnRows() {
    let rows: any[] = []
    let index = 0;

    for (let i = 0; i < 2; ++i) {
      let children = [];
      for (let j = 0; j < 2; ++j) {
        children.push(<div className="content-item center-wrapper" key={j}>{contentItems[index].component()}</div>);
        index++;
      }

      rows.push(<div className="content-row" key={i}>{children}</div>);
    }
    
    return rows;
}

function returnColumn() {
    let column: any[] = [];
    let children = [];
    for (let i = 0; i < contentItems.length; ++i) {
        children.push(<div className="content-item center-wrapper" key={i}>{contentItems[i].component()}</div>);
    }

    return children;
}

class AboutMe extends Component {
    bigScreen = window.matchMedia("(min-width: 1166px)");
 
    render() {
        return (
            <div className="aboutme-wrapper center-wrapper">
                {this.bigScreen.matches ? returnRows() : returnColumn()}
            </div>
        )
    }
}

export default AboutMe;