import "./ItemCatalogue.css";

import React, {Component} from "react";
import CatalogueFilter from "../CatalogueFilter/CatalogueFilter";

class ItemCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <section className="coffee-catalogue">
                    <CatalogueFilter/>
                </section>
            </>
        );
    }
}

export default ItemCatalogue;