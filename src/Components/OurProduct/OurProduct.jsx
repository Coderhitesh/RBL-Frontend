import React from 'react'
import './OurProduct.css'
import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'

function OurProduct() {
  return (
    <section className='OurProduct-section'>
      <div className="OurProduct-container">
        <div className="heading">
            <h1>Our Products</h1>
        </div>
        <div className="main-container">
            <div className="col">
                <img src={p1} alt="" />
                <div className="content">
                    <span>Go Account</span>
                    <div className="btn">
                        <button>KNOW MORE</button>
                        <button>OPEN NOW</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={p2} alt="" />
                <div className="content">
                    <span>Go Account</span>
                    <div className="btn">
                        <button>KNOW MORE</button>
                        <button>OPEN NOW</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={p3} alt="" />
                <div className="content">
                    <span>Go Account</span>
                    <div className="btn">
                        <button>KNOW MORE</button>
                        <button>OPEN NOW</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurProduct
