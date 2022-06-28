import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsData: [
                {
                    img: "product-1.png",
                    heading: "Solimo Coffee Beans 2 kg",
                    country: "Italia",
                    price: "10.73$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    img: "product-2.png",
                    heading: "Presto Coffee Beans 1 kg",
                    country: "France",
                    price: "15.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    img: "product-3.png",
                    heading: "AROMISTICO Coffee 1 kg",
                    country: "Ukraine",
                    price: "6.99$",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
            ]
        };

    }

    render() {
        return (
            <>
                <Banner link={"/ourCoffee"}/>
                <AboutUs/>
                <Products itemsData={this.state.itemsData}/>
            </>
        );
    }

}

export default MainPage;