import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsData: [
                {img: "product-1.png", heading: "Solimo Coffee Beans 2 kg", price: "10.73$"},
                {img: "product-2.png", heading: "Presto Coffee Beans 1 kg", price: "15.99$"},
                {img: "product-3.png", heading: "AROMISTICO Coffee 1 kg", price: "6.99$"}
            ]
        };

    }
    render(){
        return (
            <>
                <Banner link={"/ourCoffee"}/>
                <AboutUs/>
                <Products itemsData = {this.state.itemsData}/>
            </>
        );
    }
    
}

export default MainPage;