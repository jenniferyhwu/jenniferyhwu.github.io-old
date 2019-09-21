import React, { Component } from 'react';
import ThreeEntryPoint from "./ThreeEntryPoint";

import './MyThreeComponent.scss';

export default class MyThreeComponent extends Component {
    componentDidMount() {
        ThreeEntryPoint(this.threeCrateElement, "/crate/scene.gltf");
    }

    render () {
        return (
            <div className="three-model-wrapper" ref={element => this.threeCrateElement = element}></div>
        );
    }
}