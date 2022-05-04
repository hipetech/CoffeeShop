import './Products.css'

const Products = () => {
    return(
        <section class="products">
            <h2 class="products-title">Our best</h2>
            <div class="cards">
                <div class="card">
                    <div class="img-container">
                        <img class="product-img" src="product-1.png" alt="Coffee" />
                    </div>
                    <div class="content-container">
                        <h3>Solimo Coffee Beans 2 kg</h3>
                        <h3 class="product-price">10.73$</h3>
                    </div>
                </div>
                <div class="card">
                    <div class="img-container">
                        <img class="product-img" src="Product-2.png" alt="Coffee" />
                    </div>
                    <div class="content-container">
                        <h3>Presto Coffee Beans 1 kg</h3>
                        <h3 class="product-price">15.99$</h3>
                    </div>
                </div>
                <div class="card">
                    <div class="img-container">
                        <img class="product-img" src="product-3.png" alt="Coffee" />
                    </div>
                    <div class="content-container">
                        <h3>AROMISTICO Coffee 1 kg</h3>
                        <h3 class="product-price">6.99$</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;