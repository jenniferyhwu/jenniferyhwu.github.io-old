import React, { Component } from 'react';
import shroom from './../images/shroom.png';

import './Projects.scss';
import './CustomProjectPanels.scss';
import { Code, InfoOutlined } from '@material-ui/icons';

const projectInfo = [
    {
        classLabel: "litdubs",
        name: "lit dubs",
        image: shroom,
        desc: "dubs so lit they speak for themselves.",
        award: {name: "best of use of gcp", hackathon: "brickhack 2019"}
    },
    {
        name: "cordelia",
        image: shroom,
        desc: "because I'm always running out of data.",
        award: {name: "best of use of here.com", hackathon: "bostonhacks 2018"}
    },
    {
        name: "cali-or-bust",
        image: shroom,
        desc: "disclaimer: everything.",
        award: {name: "best of use of voiceflow", hackathon: "tohacks 2019"}
    },
    {
        name: "siloed",
        image: shroom,
        desc: "socioeconomic browsing refined.",
        award: {name: "most millenial hack", hackathon: "terriblehacks 2019"}
    },
    {
        name: "iscribe",
        image: shroom,
        desc: "drugs can be bad for you.",
        award: {hackathon: "yhack 2018"}
    },
    {
        name: "eigenfaces",
        image: shroom,
        desc: "they say we each have three faces...",
        award: {hackathon: "hack the north 2018"}
    }
]

function PanelFooter(award: any) {
    if (award.name) {
        return (
            <div className="panel-footer">
                {award.name.toUpperCase()}
                <br></br>
                <span className="accent-font">// {award.hackathon.toUpperCase()}</span>
            </div>
        )

    } else {
        return (
            <div className="panel-footer">
                <span className="accent-font">{award.hackathon.toUpperCase()}</span>
            </div>
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
                    <InfoOutlined />
                    <Code />
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
                {PanelFooter(this.props.project.award)}
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