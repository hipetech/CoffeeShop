import React from "react";
import "./CatalogueFilter.css";
import {Component} from "react";

class CatalogueFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="search-panel">
                <div className="input">
                    <label htmlFor="search" className="search-label">Looking for</label>
                    <input type="text" placeholder="start typing here..." id="search" onFocus="" className="search-input"/>
                </div>
                <div className="filter">
                    <div className="filter-title">
                        <h4>Or filter</h4>
                    </div>
                    <div className="filter-cards">
                        <button className="filer-card">
                            <span className="btn-text">Brazil</span>
                        </button>
                        <button className="filer-card">
                            <span className="btn-text">Kenya</span>
                        </button>
                        <button className="filer-card">
                            <span className="btn-text">Columbia</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CatalogueFilter;