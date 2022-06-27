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
                {img: "product-3.png", heading: "BROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$"},
                {img: "product-3.png", heading: "CROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$"},
                {img: "product-3.png", heading: "DROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
                {img: "product-3.png", heading: "EROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
                {img: "product-3.png", heading: "FROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"}
            ],
            filterStatus: false
        };
        this.filterList = [];
        this.filtered = this.state.itemsData;
    }

    searchEmp = (items, term) => {
        if (term.length !== 0) {
            return items.filter(item => {
                return item.heading.indexOf(term) > -1;
            });
        } else {
            return this.filtered;
        }
    };

    searchElement = (e) => {
        this.setState({itemsData: this.searchEmp(this.filtered, e.target.value)});
    };

    filter = () => {
        if (this.filterList.length !== 0) {
            this.setState({itemsData: this.filtered.filter(item => this.filterList.includes(item.country))});
        } else {
            this.setState({itemsData: this.filtered});
        }
    };

    addFilter = (country) => {
        if ((!this.filterList.includes(country))) {
            this.filterList.push(country);
            this.filter();
        }
    };

    removeFilter = (country) => {
        if (this.filterList.includes(country)) {
            this.filterList = this.filterList.filter(item => item !== country);
            this.filter();
        }
    };

    toggleFilter = (e, trigger, country) => {
        if (trigger) {
            this.addFilter(country);
        } else {
            this.removeFilter(country);
        }
    };

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
                <ItemCatalogue itemsData={this.state.itemsData}
                    search={this.searchElement}
                    toggleFilter={this.toggleFilter}
                />
            </>
        );
    }
}

export default OurCoffee;