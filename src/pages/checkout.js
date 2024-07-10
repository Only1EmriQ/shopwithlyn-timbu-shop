import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
    return (
        <Fragment>
            <div className="checkout">
                <div className="arrow-back">
                    <span className="back">
                        <Link to="/cartsummary"><span className="material-symbols-outlined">arrow_back</span></Link>
                    </span>
                    <h1>Checkout</h1>
                </div>

                <div className="checkout-container">
                    <div className="contact-info">
                        <h2>1. Contact Info</h2>
                        <form className="form-1">
                            <div className="form-row">
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                            </div>
                            <div className="form-row">
                                <input type="email" id="email" name="email" placeholder="Email address" />
                                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                            </div>
                        </form>
                    </div>

                    <div className="order-summary-1">

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
                    </div>

                    <div className="delivery-method">
                        <h2>2. Delivery Method</h2>

                        <form className="form-2">
                            <div className="form-row">
                                <input type="date" id="deliveryDate" name="deliveryDate" placeholder="Select delivery date" />
                                <input type="text" id="address" name="address" placeholder="Enter your address" />
                            </div>
                            <div className="form-row">
                                <input type="text" id="city" name="city" placeholder="Enter your city" />
                                <input type="text" id="zipCode" name="zipCode" placeholder="Enter your zip code" />
                            </div>
                        </form>
                        <div className="checkout-icons">

                            <button>
                                <i className="bi bi-shop">Store</i>
                            </button>
                            <button>
                                <i className="bi bi-truck">Delivery</i>
                            </button>

                        </div>
                    </div>

                    <div className="payment-method">
                        <h2>3. Payment Method</h2>
                        <div className="payment-icons">
                            <button><img src="assets/images/master.png" alt="" /></button>
                            <button><img src="assets/images/visa.png" alt="" /></button>
                            <button><img src="assets/images/apple-pay.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2024 ShopWithLyn Cloud Shop</p>
            </footer>
        </Fragment>
    )
}

export default Checkout;