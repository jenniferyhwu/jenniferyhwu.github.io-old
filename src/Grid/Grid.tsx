import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from '../Main/Main';
import Resume from '../Resume/Resume';

import './Grid.scss';

const gridContents: any = [
    [
        { content: <Main/>, link: '/main-page/'},
        { content: <Main/>, link: ''},
        { content: <Main />, link: '/resume/'}
    ],
    [
        { content: <Main/>, link: ''},
        { content: <Main/>, link: ''},
        { content: <Main/>, link: ''},
    ],
    [
        { content: <Main/>, link: ''},
        { content: <Main/>, link: ''},
        { content: <Main/>, link: ''}
    ]
]

function GridSquare(props: any) {
    return (
        <Link to={props.gridItem.link}>
            <div className="grid-square">{props.gridItem.content}</div>
        </Link>
    );
}

class Grid extends Component {
    render() {
        return (
            <div className="grid-frame full-wrapper center-wrapper"> 
                {gridContents.map((gridRow: any, i: number) => {
                    return (
                        <div className="grid-row" key={i}>
                            {gridRow.map((gridItem: any, j: number) => {
                                return <GridSquare gridItem={gridItem} key={j}></GridSquare>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Grid;