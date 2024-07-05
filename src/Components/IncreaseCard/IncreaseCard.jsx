import React from 'react'
    import './IncreaseCard.css'
    import bg from './bg.png'
import { Link } from 'react-router-dom'

function IncreaseCard() {
  return (
    <section className='IncreaseCard-section'>
      <div className="IncreaseCard-container">
        <div className="left">
            <img src={bg} alt="" />
        </div>
        <div className="right">
        <h2>You're Just A Card Away From Amazing Offers!</h2>
        <div className="about">
            <span>Your Card</span>
            <span>Your Benifits</span>
            <span>Your Rules</span>
        </div>
        <Link to={'/personal-detail'}>INCREASE CARD</Link>
        </div>
      </div>
    </section>
  )
}

export default IncreaseCard
