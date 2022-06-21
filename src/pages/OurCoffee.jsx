import React, {Component} from "react";
import Article from "../components/Article/Article";
import HeadTittle from "../components/HeadTittle/HeadTittle";
import ItemCatalogue from "../components/ItemCatalogue/ItemCatalogue";


class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsData: [
                {img: "product-3.png", heading: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
                {img: "product-3.png", heading: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$"},
                {img: "product-3.png", heading: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$"},
                {img: "product-3.png", heading: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
                {img: "product-3.png", heading: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
                {img: "product-3.png", heading: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"}
            ]
        };
    }

    render() {
        const hrStyle = {
            width: "240px",
            backgroundColor: "black"
        };
        return (
            <>
                <HeadTittle backgroundImage={"./ourCoffeeBackground.png"} titleText={"Our Coffee"}/>
                <Article imagePath={"./about-coffee-img.jpg"} title={"About out beans"}/>
                <hr style={hrStyle}/>
                <ItemCatalogue itemsData={this.state.itemsData}/>
            </>
        );
    }
}

export default OurCoffee;