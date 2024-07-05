import React from 'react'
import './AdvantageHome.css'

function AdvantageHome() {

  return (
    <section className='AdvantageHome-section'>
      <div className="AdvantageHome-container">
        <div className="heading">
            <h2>LoanTap’s <span>Advantage</span></h2>
            <p>Here’s how we make our insurance offerings Fast, Flexible and Friendly!</p>
        </div>

        <div className="advantage-detail">
            <div className="detail-bg">

            </div>
            <div className="detail-data">
                <div className="col">
                    <div className="icon">
                    <i class="ri-money-rupee-circle-line"></i>
                    </div>
                    <h3>Customized Personal Loan</h3>
                    <p>An array of customized and flexible personal Loans products</p>
                </div>
                <div className="col">
                    <div className="icon">
                    <i class="ri-money-rupee-circle-line"></i>
                    </div>
                    <h3>Secured Data System</h3>
                    <p>We keep your data secured and encrypted</p>
                </div>
                <div className="col">
                    <div className="icon">
                    <i class="ri-money-rupee-circle-line"></i>
                    </div>
                    <h3>Instant Approval & Disbursal</h3>
                    <p>Easy online process for quick loan sanction and disbursal within 24-36 hours</p>
                </div>
                <div className="col">
                    <div className="icon">
                    <i class="ri-money-rupee-circle-line"></i>
                    </div>
                    <h3>User-friendly</h3>
                    <p>Easy to use, convenient & user friendly for a seamless customer journey</p>
                </div>
                <div className="col">
                    <div className="icon">
                    <i class="ri-money-rupee-circle-line"></i>
                    </div>
                    <h3>Transparent Process</h3>
                    <p>Transparent communication throughout the process and no hidden charges</p>
                </div>
                <div className="col">
                    <div className="icon">
                    <i class="ri-money-rupee-circle-line"></i>
                    </div>
                    <div className="detail">
                    <h3>Flexible Repayment Option</h3>
                    <p>Accelerated payment options towards principal outstanding</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AdvantageHome
