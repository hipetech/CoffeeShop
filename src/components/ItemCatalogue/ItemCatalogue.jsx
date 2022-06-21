import "./ItemCatalogue.css";

import React, {Component} from "react";
import CatalogueFilter from "../CatalogueFilter/CatalogueFilter";
import {CatalogueItems} from "../CatalogueItems/CatalogueItems";
import PropTypes from "prop-types";

class ItemCatalogue extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="coffee-catalogue">
                    <CatalogueFilter itemsData={this.props.itemsData} />
                    <CatalogueItems itemsData={this.props.itemsData} />
                </section>
            </>
        );
    }
}

ItemCatalogue.propTypes = {
    itemsData: PropTypes.array
};

export default ItemCatalogue;