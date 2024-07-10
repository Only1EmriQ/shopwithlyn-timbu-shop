import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    return (
        <Fragment>
            <header>
                <nav>
                    <div><p><span>SHOPWITHLYN</span></p></div>
                    <ul>
                        <li>
                            <Link to="/cartsummary"><span className="material-symbols-outlined">
                                shopping_cart
                            </span></Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="feature" style={{
                    backgroundImage: 'url("assets/images/Rectangle 1.png")'
                }}>
                    <h1>Welcome To Lyn's Shop</h1>
                    <p>Your one-stop shop for the best boots in the market. </p>
                    <p>Experience the perfect fit.
                        Boots tailored for you!</p>
                </section>

                <div className="stock">
                    <nav>
                        <ul>
                            <li><Link to="/cartsummary">Old Stock</Link></li>

                            <li><Link to="/checkout">New Products</Link></li>

                        </ul>
                    </nav>
                </div>
                <section className="product-section">
                    <div className="product-card">
                        <img src="assets/images/Rectangle 3 (1).svg" alt="" />
                        <p>Therapy shoes</p>
                        <p>₦ 24,000</p>
                        <button className="add-to-cart-btn"><Link to="/cartsummary">Add to cart</Link></button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>
                    <div className="product-card">
                        <img src="assets/images/Rectangle 6.png" alt="" />
                        <p>KKdom Unisex</p>
                        <p>₦22,000</p>
                        <button className="add-to-cart-btn">Add to cart</button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>
                    <div className="product-card">
                        <img src="assets/images/Rectangle 9.png" alt="" />
                        <p>Saddle Waterproof</p>
                        <p>₦26,00</p>
                        <button className="add-to-cart-btn"><Link to="/cartsummary">Add to cart</Link></button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>
                    <div className="product-card">
                        <img src="assets/images/Rectangle 6 (1).png" alt="" />
                        <p>Sport Wide Boots</p>
                        <p>₦22,000</p>
                        <button className="add-to-cart-btn"><Link to="/cartsummary">Add to cart</Link></button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>
                    <div className="product-card">
                        <img src="assets/images/Rectangle 6 (6).png" alt="" />
                        <p>Designers Platforms</p>
                        <p>₦35,000</p>
                        <button className="add-to-cart-btn"><Link to="/cartsummary">Add to cart</Link></button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>
                    <div className="product-card">
                        <img src="assets/images/Rectangle 6 (5).png" alt="" />
                        <p>flangieso Boots</p>
                        <p>₦ 18,000</p>
                        <button className="add-to-cart-btn"><Link to="/cartsummary">Add to cart</Link></button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>

                    <div className="product-card">
                        <img src="assets/images/Rectangle 6 (4).png" alt="" />
                        <p>Chunky Boots</p>
                        <p>₦20,000</p>
                        <button className="add-to-cart-btn"><Link to="/cartsummary">Add to cart</Link></button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>
                    <div className="product-card">
                        <img src="assets/images/Rectangle 6 (3).png" alt="" />
                        <p>High Top Boots</p>
                        <p>₦25,000</p>
                        <button className="add-to-cart-btn"><Link to="/cartsummary">Add to cart</Link></button>
                        <button><Link to="/checkout">Buy Now</Link></button>
                    </div>

                </section>
            </main>

            <footer>
                <p>&copy; 2024 ShopWithLyn Cloud Shop</p>
            </footer>
        </Fragment>
    )
}

export default Shop;