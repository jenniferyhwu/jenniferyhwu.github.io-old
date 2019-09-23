import React, { Component } from 'react';

const resume = {
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

export default resume;