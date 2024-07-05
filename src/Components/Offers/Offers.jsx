import React, { useState } from 'react'
import './Offers.css'

function Offers() {
    const [activeTab, setActiveTab] = useState('All');

    const activeAll = () => {
        setActiveTab('All');
    }

    const activePersonal = () => {
        setActiveTab('Personal');
    }

    const activeSpecial = () => {
        setActiveTab('Special');
    }

    const activeBusiness = () => {
        setActiveTab('Business');
    }

    return (
        <section className='offer-section'>
            <div className="offer-container">
                <div className="offer-heading">
                    <h2>Our <span>Offerings</span></h2>
                    <p>We help millions of people find the right product. Choose a category to narrow your search and find the Loan that’s right for you.</p>
                </div>
                <div className="offer-box">
                    <div className="navigator">
                        <div onClick={activeAll} className={`navigate ${activeTab === 'All' ? 'active' : ''}`}>
                            <p>All</p>
                        </div>
                        <div onClick={activePersonal} className={`navigate ${activeTab === 'Personal' ? 'active' : ''}`}>
                            <p>Personal Insurance</p>
                        </div>
                        <div onClick={activeSpecial} className={`navigate ${activeTab === 'Special' ? 'active' : ''}`}>
                            <p>Special Purpose Insurance</p>
                        </div>
                        <div onClick={activeBusiness} className={`navigate ${activeTab === 'Business' ? 'active' : ''}`}>
                            <p>Business Insurance</p>
                        </div>
                    </div>
                    <div className="detail">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers
