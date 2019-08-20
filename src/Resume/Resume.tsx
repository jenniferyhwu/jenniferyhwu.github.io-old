import React, { Component } from 'react';

import './Resume.scss';

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
            languages: ['javascript', 'typescript', 'c', 'java', 'c++', 'python', 'html', 'css', 'racket'],
            tools: ['angular', 'react', 'node.js', 'flask', 'git', 'android studio']
        }
    },
    experience: {
        name: 'experience',
        content: [
            {
                company: 'evertz',
                title: 'student design engineer',
                timePeriod: 'may - sep \'19',
                desc: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna fermentum iaculis',
                    'Sed odio morbi quis commodo odio aenean sed adipiscing diam. Mauris sit amet massa vitae tortor condimentum lacinia quis vel'
                ]
            },
            {
                company: 'waterloo rocketry',
                title: 'app developer',
                timePeriod: 'oct \'18 - present',
                desc: [
                    'Working in a team to develop an Android app in Java for a design team’s annual rocketry competition – a cost-effective and adaptable method for real-time communication with the rocket while in flight'
                ]
            }
        ]
    },
    awards: {
        name: 'awards',
        content: [
            {
                name: 'best use of gcp',
                source: 'brickhack',
                date: 'mar \'19',
                desc: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna fermentum iaculis',
                    'Sed odio morbi quis commodo odio aenean sed adipiscing diam. Mauris sit amet massa vitae tortor condimentum lacinia quis vel'
                ]
            },
            {
                name: 'best use of here.com',
                source: 'bostonhacks',
                date: 'oct \'18',
                desc: [
                    'Built an SMS-based chatbot that acts as an internet-less GPS for parking spaces',
                    'Implemented the HERE.com API for location and routing, Shine API for locating parking spots, and Twilio API for communicating between the user and backend via SMS'
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
                'Faculty of Mathematics Entrance Scholarship ($5000)'
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
            <div className="timeline-wrapper">
                {drawTimelineLine()}
                <div className="timeline">
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
                                    return <li key={j}>{descItem}</li>
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
                                    return <li key={j}>{descItem}</li>
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