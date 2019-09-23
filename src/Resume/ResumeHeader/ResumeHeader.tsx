import React, { Component } from "react";
import { Search } from "@material-ui/icons";

import './ResumeHeader.scss';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <Search />
            </div>
        )
    }
}

class ResumeHeader extends Component {
    render() {
        return (
            <div className="resumeheader-wrapper">
                <h1 className="section-header">resume</h1>
            </div>
        )
    }
}

export default ResumeHeader;