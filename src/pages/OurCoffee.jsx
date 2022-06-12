import React, {Component} from "react";
import Article from "../components/Article/Article";
import HeadTittle from "../components/HeadTittle/HeadTittle";
import ItemCatalogue from "../components/ItemCatalogue/ItemCatalogue";


class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.setState = {};
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
                <ItemCatalogue/>
            </>
        );
    }
}

export default OurCoffee;