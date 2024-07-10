import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function CartSummary() {
    return (
        <Fragment>
            <div className="container">
                <div className="cart-container">
                    <h1>Shopping Cart</h1>
                    <div className="cart-header">
                        <div>PRODUCT DETAILS</div>
                        <div>QUANTITY</div>
                        <div>PRICE</div>
                        <div>TOTAL</div>
                    </div>
                    <div className="cart-item">
                        <div className="product-details">
                            <img src="assets/cart-images/product1.png" alt="Flangesio Boots Black" />
                            <span>Flangesio Boots Black</span>
                            <a href="#" className="remove">Remove</a>
                        </div>
                        <div className="product-quantity">
                            <button className="quantity-btn">-</button>
                            <input type="text" value="2" />
                            <button className="quantity-btn">+</button>
                        </div>
                        <div className="product-price">₦ 18,000</div>
                        <div className="product-total">₦ 36,000</div>
                    </div>
                    <div className="cart-item">
                        <div className="product-details">
                            <img src="assets/cart-images/product2.png" alt="Chunky Boots Black" />
                            <span>Chunky Boots Black</span>
                            <a href="#" className="remove">Remove</a>
                        </div>
                        <div className="product-quantity">
                            <button className="quantity-btn">-</button>
                            <input type="text" value="1" />
                            <button className="quantity-btn">+</button>
                        </div>
                        <div className="product-price">₦ 20,000</div>
                        <div className="product-total">₦ 20,000</div>
                    </div>
                    <div className="cart-item">
                        <div className="product-details">
                            <img src="assets/cart-images/product3.png" alt="High Top Boots Black" />
                            <span>High Top Boots Black</span>
                            <a href="#" className="remove">Remove</a>
                        </div>
                        <div className="product-quantity">
                            <button className="quantity-btn">-</button>
                            <input type="text" value="1" />
                            <button className="quantity-btn">+</button>
                        </div>
                        <div className="product-price">₦ 25,000</div>
                        <div className="product-total">₦ 25,000</div>
                    </div>
                    <button className="continue-shopping"><Link to="/" className='cont'>Continue Shopping</Link></button>
                    
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-item">
                        <span>ITEMS SUBTOTAL:</span>
                        <span>₦ 81,000</span>
                    </div>
                    <div className="summary-item">
                        <span>SHIPPING:</span>
                        <span>₦ 0</span>
                    </div>
                    <div className="summary-item">
                        <span>SALES TAX:</span>
                        <span>₦ 0</span>
                    </div>
                    <div className="summary-item total-cost">
                        <span>TOTAL COST:</span>
                        <span>₦ 81,000</span>
                    </div>
                    <div className="promo-code">
                        <label for="promo-code">PROMO CODE</label>
                        <input type="text" id="promo-code" name="promo-code" placeholder="Enter promo code" />
                        <button type="button">Apply</button>
                    </div>
                    <div>
                        <button className="checkout-button"><Link to="/checkout" className='Link'>CHECKOUT</Link></button>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default CartSummary;