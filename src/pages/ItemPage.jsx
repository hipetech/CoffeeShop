import React from "react";
import HeadTittle from "../components/HeadTittle/HeadTittle";
import {ItemDescription} from "../components/itemDescription/itemDescription";

export class ItemPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <HeadTittle backgroundImage={"./ourCoffeeBackground.png"} titleText={"Our Coffee"}/>
                <ItemDescription
                    image={"product-3.png"}
                    country={"Brazil"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    price={"16.99$"}
                />
            </>
        );
    }
}

export default ItemPage;