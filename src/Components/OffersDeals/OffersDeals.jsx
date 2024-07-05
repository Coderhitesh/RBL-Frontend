import React from 'react'
import './OffersDeals.css'

function OffersDeals() {
    return (
        <section className='OffersDeals-section'>
            <div className="OffersDeals-container">
                <div className="heading">
                    <h2>Offers & Deals</h2>
                </div>
                <div className="main-data">
                    <div className="data1">
                        <div className="info">
                            <a href="">Debit Card</a>
                            <h2>SNITCH</h2>
                            <p>Get 20% off on minimum purchase of INR 2,499</p>
                        </div>
                    </div>
                    <div className="data1">
                        <div className="info">
                            <a href="">Credit Card</a>
                            <h2>Attractive Offers</h2>
                            <p>Deals for sun-tastic shopping spree</p>
                        </div>
                    </div>
                    <div className="data1">
                        <div className="info">
                            <a href="">Debit Card</a>
                            <h2>Oven Story</h2>
                            <p>Get 50% off up to INR 125 on orders above INR 249</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OffersDeals
