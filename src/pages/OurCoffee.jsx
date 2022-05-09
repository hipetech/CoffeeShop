import { Component, Fragment } from "react";
import Article from "../components/Article/Article";
import HeadTittle from "../components/HeadTittle/HeadTittle";

class OurCoffee extends Component {
    constructor(props) {
        super(props)
        this.setState =  {

        }
    }

    render() {
        const hrStyle = {
            width: '15%',
            color: 'black',
            border: '1px solid'
        }
        return (
            <>
                <HeadTittle backgroundImage={'./ourCoffeeBackground.png'} titleText={'Our Coffee'}/>
                <Article imagePath={'./about-coffee-img.jpg'} title={'About out beans'}/>
                <hr style={hrStyle}/>
            </>
        )
    }
}

export default OurCoffee;