import React, { Component } from "react";

import './AboutMeThree.scss';
import MyThreeComponent from "../Three/MyThreeComponent";

class AboutMeThree extends Component {
    render() {
        return (
            <div className="aboutmethree-wrapper center-wrapper">
                <div className="three-model-container">
                    <MyThreeComponent />
                </div>
            </div>
        )
    }
}

export default AboutMeThree;