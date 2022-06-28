import React, {Component} from "react";
import Article from "../components/Article/Article";
import HeadTittle from "../components/HeadTittle/HeadTittle";
import {CatalogueItems} from "../components/CatalogueItems/CatalogueItems";


class ForYourPleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsData: [
                {
                    img: "product-3.png",
                    heading: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "6.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    img: "product-3.png",
                    heading: "BROMISTICO Coffee 1 kg",
                    country: "Kenya",
                    price: "6.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    img: "product-3.png",
                    heading: "CROMISTICO Coffee 1 kg",
                    country: "Columbia",
                    price: "6.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    img: "product-3.png",
                    heading: "DROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "6.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    img: "product-3.png",
                    heading: "EROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "6.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    img: "product-3.png",
                    heading: "FROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "6.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
            ],
        };
    }

    render() {
        const hrStyle = {
            width: "240px",
            backgroundColor: "black"
        };
        return (
            <>
                <HeadTittle backgroundImage={"./for-your-pleasure-background.png"} titleText={"For your pleasure"}/>
                <Article imagePath={"./for-your-pleasure-img.jpg"} title={"About our goods"}/>
                <hr style={hrStyle}/>
                <CatalogueItems itemsData={this.state.itemsData}/>
            </>
        );
    }
}


export default ForYourPleasure;