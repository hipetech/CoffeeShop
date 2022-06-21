import React, {Component} from "react";
import "./CatalogueFilter.css";
import PropTypes from "prop-types";

class CatalogueFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: this.filterItemsDuplicate("country")
        };
    }

    filterItemsDuplicate = (prop) => {
        let uniqueIds = [];

        return this.props.itemsData.filter((el) => {
            if (!(uniqueIds.includes(el[prop]))) {
                uniqueIds.push(el[prop]);

                return true;
            }

            return false;
        });
    };

    changeStatus = (e) => {
        e.target.classList.toggle("filter-selected");
    };

    render() {
        return (
            <div className="search-panel">
                <div className="input">
                    <label htmlFor="search" className="search-label">Looking for</label>
                    <input type="text" placeholder="start typing here..." id="search" className="search-input" />
                </div>
                <div className="filter">
                    <div className="filter-title">
                        <h4>
                            Or filter
                        </h4>
                    </div>
                    <div className="filter-cards">
                        {
                            this.state.countries.map((el, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <button className="filer-card" onClick={this.changeStatus}>
                                            {el["country"]}
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

CatalogueFilter.propTypes = {
    itemsData: PropTypes.array
};

export default CatalogueFilter;