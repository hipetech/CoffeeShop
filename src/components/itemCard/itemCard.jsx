import React from "react";
import "./itemCard.css";
import PropTypes from "prop-types";

export default class ItemCard extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <>
                <div className="card">
                    <div className="img-container">
                        <img className="product-img" src={this.props.itemData.img} alt="Coffee"/>
                    </div>
                    <div className="content-container">
                        <h3>{this.props.itemData.heading}</h3>
                        <h3>{this.props.itemData.country}</h3>
                        <h3>{this.props.itemData.price}</h3>
                    </div>
                </div>

            </>
        );
    }
}

ItemCard.propTypes = {
    itemData: PropTypes.object
};