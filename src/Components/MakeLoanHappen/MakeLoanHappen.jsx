import React from 'react'
import './MakeLoanHappen.css'
import bg from './bg.svg'

function MakeLoanHappen() {
    return (
        <section className='MakeLoanHappen-section'>
            <div className="MakeLoanHappen-container">
                <div className="main-box">
                    <div className="detail">
                        <h2>How do we make Loan happen in <span>30 minutes to 6 hours*?</span></h2>
                        <p>We make loans possible in just 3 simple steps to provide a fast, flexible and friendly customer experience</p>
                    </div>
                    <div className="img">
                        <img src={bg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeLoanHappen
