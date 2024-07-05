import React from 'react'
import './HaveQuestion.css'
import bg from './bg.svg'

function HaveQuestion() {
    return (
        <section className='HaveQuestion-section'>
            <div className="HaveQuestion-container">
                <div className="left">
                    <div className="heading">
                        <h2>Have a question?</h2>
                        <h2>Here to help.</h2>
                    </div>
                    <p>Our friendly customer support team is your extended family. Speak your heart out. They listen with undivided attention to resolve your concerns. Give us a call, request a callback or drop us an email, we’re here to help.</p>
                    <a href='mailto:premium.care@indusind.com ' className="mail">
                        <i class="ri-mail-line"></i>
                        <div className="detail">
                            <h3>General Enquiries</h3>
                            <a href="">customercare@rblbank.com </a>
                        </div>
                    </a>
                    <a href='tel:020-26343201' className="mail">
                    <i class="ri-customer-service-2-line"></i>
                        <div className="detail">
                            <h3>Customer Sales Enquiries</h3>
                            <a href="">800-123-456</a>
                        </div>
                    </a>

                </div>
                <div className="right">
                    <img src={bg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HaveQuestion
