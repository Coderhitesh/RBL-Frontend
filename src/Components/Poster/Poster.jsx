import React from 'react'
import './Poster.css'
import { Link } from 'react-router-dom'

function Poster() {
  return (
    <section className='Poster-section'>
      <div className="Poster-container">
        <div className="right">
            <div className="head">
            <h2>You're Just A Card Away</h2>
            <h2>From Amazing Offers!</h2>
            </div>
            <div className="row">
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

export default Poster
