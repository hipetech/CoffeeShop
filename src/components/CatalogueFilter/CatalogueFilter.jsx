import React from "react";
import "./CatalogueFilter.css";
import { Component } from "react";

class CatalogueFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterCategory: ["Brazil", "Kenya", "Columbia"],
        };
    }

    changeStatus = (e) => {
        this.setState({isActive: !(this.state.isActive)});
        e.target.classList.toggle("filter-selected");
    };

    render() {
        return (
            <div className="search-panel">
                <div className="input">
                    <label htmlFor="search" className="search-label">Looking for</label>
                    <input type="text" placeholder="start typing here..." id="search" onFocus="" className="search-input" />
                </div>
                <div className="filter">
                    <div className="filter-title">
                        <h4>
                            Or filter
                        </h4>
                    </div>
                    <div className="filter-cards">
                        {
                            this.state.filterCategory.map((el, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <button className="filer-card" onClick={this.changeStatus}>
                                            {el}
                                        </button>
                                    </React.Fragment>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CatalogueFilter;