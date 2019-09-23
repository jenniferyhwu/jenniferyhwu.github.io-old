import React, { Component } from 'react';

import './Resume.scss';
import { Slide } from '@material-ui/core';

const events = [
    {
        title: "Hack the 6ix",
        date: "Aug '19"
    },
    {
        title: "TOHacks",
        date: "June '19"
    },
    {
        title: "RUHacks",
        date: "June '19"
    },
    {
        title: "Co-op: Evertz",
        date: "May '19"
    },
    {
        title: "TerribleHacks",
        date: "March '19"
    },
    {
        title: "BrickHack",
        date: "March '19"
    }
]

const resume: any = {
    skills: {
        name: 'skills',
        content: {
            languages: ['javascript', 'typescript', 'c', 'python', 'c++', 'java', 'html', 'css/scss', 'racket'],
            'web tooling': ['angular', 'react', 'node.js', 'flask', 'oauth2.0'],
            tooling: ['android studio', 'bash', 'linux', 'git', 'jira', 'spring', 'sql']
        }
    },
    experience: {
        name: 'experience',
        content: [
            {
                company: 'evertz',
                title: 'software developer intern',
                timePeriod: 'may - sep \'19',
                desc: [
                    <li>Created the front-facing, REST-compliant web client for a cloud orchestration product with Angular 8</li>,
                    <li>Migrated admin dashboard from Angular 4 to 8, leveraging new features to replace defunct libraries</li>,
                    <li>Ensured that the web clients and the Spring backend were consistently compatible, particularly during the restructuring of the software to implement asynchronous data handling</li>
                ]
            },
            {
                company: 'waterloo rocketry',
                title: 'app developer',
                timePeriod: 'oct \'18 - present',
                desc: [
                    <li>Working in a design team to develop an Android app to communicate with a custom rocket</li>,
                    <li>Implemented an offline map that updates in real time using the osmdroid library</li>
                ]
            },
            {
                company: 'starterhacks, ruhacks',
                title: 'mentor',
                timePeriod: 'jan, may \'19',
                desc: [
                    <li>Provided immediate on-site assistance for hackathon participants in debugging their projects as well as providing general developer-related guidance for JavaScript, React, Java, and Android Studio</li>
                ]
            }
        ]
    },
    awards: {
        name: 'projects',
        content: [
            {
                name: 'cali-or-bust',
                source: 'tohacks (winner of best use of voiceflow)',
                date: 'jun \'19',
                desc: [
                    <li>Built an AI-powered chatbot that provides mock interviews tailored to the user</li>,
                    <li>Used Azure to analyze user responses and Angular and Voiceflow to coordinate visual and aural UIs</li>,
                ]
            },
            {
                name: 'litdubs',
                source: 'brickhack (winner of best use of gcp)',
                date: 'oct \'18',
                desc: [
                    <li>Developed a web app that automatically translates and dubs YouTube videos using GCP services</li>,
                    <li>Created a Python script to retrieve video data and implemented Flask to serve the application</li>
                ]
            }
        ]
    },
    education: {
        name: 'education',
        content: {
            name: 'university of waterloo',
            desc: [
                'Candidate for Bachelor of Computer Science, Class of 2023',
                'President\'s Scholarship of Distinction, Faculty of Mathematics Entrance Scholarship'
            ]
        }
    }
}

function drawTimelineLine() {
    return (
        <div className="timeline-line"></div>
    )
}

class Timeline extends Component {
    renderOnTop = false;

    switchTop() {
        this.renderOnTop = !this.renderOnTop;
    }

    render() {
        return (
            <div className="events-wrapper center-wrapper">
                <h3 className="section-header">MILESTONES</h3>
                <div className="timeline-wrapper">
                    {drawTimelineLine()}
                    <div className="timeline center-wrapper">
                        {events.map((event, i: number) => {
                            {this.switchTop()}

                            return (
                                <div className={"event center-wrapper" + (this.renderOnTop ? "top" : "bottom")} key={i}>
                                    <h4>{event.title}</h4>
                                    <h6>{event.date}</h6>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function skillsBlock() {
    return (
        <div className="info-block skills-block">
            <h3 className="section-header">{resume.skills.name.toUpperCase()}</h3>
            {Object.keys(resume.skills.content).map(skillKey => {
                return (
                    <div className="inner-block" key={skillKey}>
                        <h5 className="sub-header">{skillKey}</h5>
                        {resume.skills.content[skillKey].map((skill: string, i: number, arr: any) => {
                            return <p className="desc-text" key={i}>{skill}{arr.length - 1 == i ? "" : ","}&nbsp;</p>
                        })}
                    </div>
                )
            })}
        </div>
    )
}

function expBlock() {
    return (
        <div className="info-block detail-block exp-block">
            <h3 className="section-header">{resume.experience.name.toUpperCase()}</h3>
            {resume.experience.content.map((exp: any, i: number) => {
                return (
                    <div className="inner-block" key={i}>
                        <div className="sub">
                            <h5 className="sub-header">{exp.company}&nbsp;<span className="subsub-header">~&nbsp;{exp.title}</span></h5>
                            <h5 className="sub-header"><span className="subsub-header date-header">{exp.timePeriod}</span></h5>
                        </div>
                        <div className="desc">
                            <ul className="desc-text">
                                {exp.desc.map((descItem: any, j: number) => {
                                    return descItem;
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function awardsBlock() {
    return (
        <div className="info-block detail-block awards-block">
            <h3 className="section-header">{resume.awards.name.toUpperCase()}</h3>
            {resume.awards.content.map((exp: any, i: number) => {
                return (
                    <div className="inner-block" key={i}>
                        <div className="sub">
                            <h5 className="sub-header">{exp.name}&nbsp;<span className="subsub-header">~&nbsp;{exp.source}</span></h5>
                            <h5 className="sub-header"><span className="subsub-header date-header">{exp.date}</span></h5>
                        </div>
                        <div className="desc">
                            <ul className="desc-text">
                                {exp.desc.map((descItem: any, j: number) => {
                                    return descItem;
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function eduBlock() {
    return  (
        <div className="info-block detail-block edu-block">
            <h3 className="section-header">{resume.education.name.toUpperCase()}</h3>
            <div className="inner-block">
                <h5 className="sub-header">{resume.education.content.name}</h5>
                <div className="desc">
                    <ul className="desc-text">
                        {resume.education.content.desc.map((descItem: any, i: number) => {
                            return <li key={i}>{descItem}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

class General extends Component {
    render() {
        return (
            <div className="general">
                {skillsBlock()}
                {expBlock()}
                {awardsBlock()}
                {eduBlock()}
            </div>
        )
    }
}


class Resume extends Component {
    render() {
        return (
            <div className="resume-wrapper">
                <General />
                <Timeline />
            </div>
        )
    }
}

export default Resume;