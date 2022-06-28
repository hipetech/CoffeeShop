import React from "react";
import "./itemCard.css";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export default class ItemCard extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <>
                <NavLink to={"/itemPage"} className={"nav-link"}>
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
                </NavLink>

            </>
        );
    }
}

ItemCard.propTypes = {
    itemData: PropTypes.object
};