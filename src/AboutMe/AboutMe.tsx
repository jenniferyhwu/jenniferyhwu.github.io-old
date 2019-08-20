import React, { Component } from "react";
import { Link } from "react-router-dom";

import { GithubSquare, DevpostSquare, LinkedinSquare, ResumeSquare } from "./SectionSquares";

import './AboutMe.scss';

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

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme-wrapper center-wrapper">
                {contentItems.map((contentRow, i: number) => {
                    return (
                        <div className="content-row" key={i}>
                            {contentRow.map((item, j: number) => {
                                return (
                                    <div className="content-item center-wrapper" key={j}>
                                        {item.component()}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AboutMe;