import React, { Component } from 'react';
import ThreeEntryPoint from "./ThreeEntryPoint";

import './MyThreeComponent.scss';

export default class MyThreeComponent extends Component {
    componentDidMount() {
        ThreeEntryPoint(this.threeCrateElement, "/crate/scene.gltf");
        //ThreeEntryPoint(this.threeCrate2Element, "/crate/scene.gltf");
    }

    render () {
        return (
            <div className="three-model-wrapper">
                <div className="crate" ref={element => this.threeCrateElement = element} />
                {/* <div className="crate2" ref={element => this.threeCrate2Element = element} /> */}
            </div>
        );
    }
}