import React from "react";
import "./Products.css";

const Products = () => {
    return (
        <section className="products">
            <h2 className="products-title">Our best</h2>
            <div className="cards">
                <div className="card">
                    <div className="img-container">
                        <img className="product-img" src={"product-1.png"} alt="Coffee"/>
                    </div>
                    <div className="content-container">
                        <h3>Solimo Coffee Beans 2 kg</h3>
                        <h3 className="product-price">10.73$</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img className="product-img" src={"Product-2.png"} alt="Coffee"/>
                    </div>
                    <div className="content-container">
                        <h3>Presto Coffee Beans 1 kg</h3>
                        <h3 className="product-price">15.99$</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img className="product-img" src={"product-3.png"} alt="Coffee"/>
                    </div>
                    <div className="content-container">
                        <h3>AROMISTICO Coffee 1 kg</h3>
                        <h3 className="product-price">6.99$</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;