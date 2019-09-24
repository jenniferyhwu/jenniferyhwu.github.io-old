import React, { Component } from 'react';
import shroom from './../images/shroom.png';

import 'simplebar';
import 'simplebar/dist/simplebar.css';

import './Projects.scss';
import './CustomProjectPanels.scss';
import { Code, InfoOutlined } from '@material-ui/icons';

const projectInfo = [
    {
        classLabel: "litdubs",
        name: "lit dubs",
        image: shroom,
        desc: "dubs so lit they speak for themselves.",
        award: {name: "best of use of gcp", hackathon: "brickhack 2019"},
        linkCode: "https://github.com/jenniferyhwu/lit-dubs",
        linkDev: "https://devpost.com/software/lit-dubs"
    },
    {
        name: "cordelia",
        image: shroom,
        desc: "because I'm always running out of data.",
        award: {name: "best of use of here.com", hackathon: "bostonhacks 2018"},
        linkCode: "https://github.com/jenniferyhwu/Cordelia",
        linkDev: "https://devpost.com/software/bostonhacks-6mabpz"
    },
    {
        name: "cali-or-bust",
        image: shroom,
        desc: "disclaimer: everything.",
        award: {name: "best of use of voiceflow", hackathon: "tohacks 2019"},
        linkCode: "https://github.com/jenniferyhwu/TOHacks2019",
        linkDev: "https://devpost.com/software/tohacks2019"
    },
    {
        name: "siloed",
        image: shroom,
        desc: "socioeconomic browsing refined.",
        award: {name: "most millenial hack", hackathon: "terriblehacks 2019"},
        linkCode: "https://github.com/jenniferyhwu/siloed",
        linkDev: "https://devpost.com/software/siloed"
    },
    {
        name: "iscribe",
        image: shroom,
        desc: "drugs can be bad for you.",
        award: {hackathon: "yhack 2018"},
        linkCode: "https://github.com/jenniferyhwu/yhacks-2018",
        linkDev: "https://www.hackerearth.com/challenges/hackathon/yhack-2018/dashboard/6faf042/submission/"
    },
    {
        name: "eigenfaces",
        image: shroom,
        desc: "they say we each have three faces...",
        award: {hackathon: "hack the north 2018"},
        linkCode: "https://github.com/jenniferyhwu/EigenFaces",
        linkDev: "https://devpost.com/software/eigenfaces-enhance-and-enrich-user-experience"
    }
]

function PanelFooter(project: any) {
    if (project.award.name) {
        return (
            <a href={project.linkDev} target="_blank">
                <div className="panel-footer">
                    {project.award.name.toUpperCase()}
                    <br></br>
                    <span className="accent-font">// {project.award.hackathon.toUpperCase()}</span>
                </div>
            </a>
        )

    } else {
        return (
            <a href={project.linkDev} target="_blank">
                <div className="panel-footer">
                    <span className="accent-font">{project.award.hackathon.toUpperCase()}</span>
                </div>
            </a>
        )
    }
}

class PanelContent extends Component<{project: any}, {}> {
    render() {
        return (
            <div className="panel-content center-wrapper">
                <h2>{this.props.project.name}</h2>
                <img src={this.props.project.image} className="panel-image" />
                <h4>{this.props.project.desc}</h4>

                <div className="link-icons center-wrapper">
                    <a href={this.props.project.linkDev} target="_blank">
                        <InfoOutlined />
                    </a>
                    <a href={this.props.project.linkCode} target="_blank">
                        <Code />
                    </a>
                </div>
            </div>
        )
    }
}

class Panel extends Component<{project: any}, {}> {
    render() {
        return (
            <div className={"project-panel " + (this.props.project.classLabel ? this.props.project.classLabel : this.props.project.name)}>
                <PanelContent project={this.props.project}/>
                {PanelFooter(this.props.project)}
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div className="project-wrapper">
               {projectInfo.map((project) => {
                   return <Panel project={project} key={project.name}/>
               })}
            </div>
        )
    }
}

export default Projects;