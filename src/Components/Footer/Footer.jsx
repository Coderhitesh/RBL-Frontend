
import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="col">
          <h2>About</h2>
          <ul>
            <li><Link>CSR</Link></li>
            <li><Link>The Bank</Link></li>
            <li><Link>Board of Directors</Link></li>
            <li><Link>Management Team</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Social Responsibility</Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Media Center</h2>
          <ul>
            <li><Link>The Bank</Link></li>
            <li><Link>Board of Directors</Link></li>
            <li><Link>Management Team</Link></li>
            <li><Link>Sustainability Framework</Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Products</h2>
          <ul>
            <li><Link to="">Press Releases</Link></li>
            <li><Link to="">Media Kit </Link></li>
            <li><Link to="">Investor Relations </Link></li>
            <li><Link to="">Investor Kit </Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Important Links</h2>
          <ul>
          <li><Link>Press Releases</Link></li>
          <li><Link>Media Kit</Link></li>
          <li><Link>Investor Kit</Link></li>
          <li><Link>Investor Relations</Link></li>
          <li><Link>Service Charges & Fees</Link></li>
          <li><Link>Interest Rates</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
