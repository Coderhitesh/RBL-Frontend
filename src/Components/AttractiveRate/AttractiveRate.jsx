import React from 'react'
import './AttractiveRate.css'

function AttractiveRate() {
  return (
    <section className='AttractiveRate-section'>
      <div className="AttractiveRate-container">
        <div className="heading">
            <h2>Attractive Rates</h2>
        </div>
        <div className="AttractiveRate-main-container">
            <div className="col">
                <p>Fixed Deposits</p>
                <span>8.00%* p.a.</span>
            </div>
            <div className="col">
                <p>Savings Account</p>
                <span>7.50%* p.a.</span>
            </div>
            <div className="col">
                <p>Education Loan</p>
                <span>10.00%* p.a.</span>
            </div>
            <div className="col">
                <p>Housing Loan</p>
                <span>8.90%* p.a.</span>
            </div>
            <div className="col">
                <p>Forex Rates</p>
                <span>$¥€</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AttractiveRate
