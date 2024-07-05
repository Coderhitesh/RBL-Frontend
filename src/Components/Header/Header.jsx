import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isHealthActive, setIsHealthActive] = useState(false);
    const [isHealthMobActive, setIsHealthMobActive] = useState(false);

    const [isLeftMenuActive , setIsLeftMenuActive] = useState(false)

    const handleLeftMenuActive = () => {
        setIsLeftMenuActive(!isLeftMenuActive)
    }

    const handleLeftMenuDeActive = () => {
        setIsLeftMenuActive(false)
    }

    const handleMenuActive = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleMenuDeActive = () => {
        setIsMenuActive(false);
    };

    const handleHealthActive = () => {
        setIsHealthActive(true);
    };

    const handleHealthDeActive = () => {
        setIsHealthActive(false);
    };

    const handleHealthMobActive = () => {
        setIsHealthMobActive(!isHealthMobActive);
    };

    return (
        <header>
            <div className="container">
                {/* <div className="top">
                    <div className="content">
                        <Link to="/creadit-detail">Apply Now</Link>
                        <Link to="/">Home</Link>
                        
                    </div>
                </div> */}
                <div className="bottom">
                    <Link onClick={handleMenuDeActive} to={'/'} className="logo">
                        <div className="menu" onClick={handleLeftMenuActive}>
                            <i className="ri-menu-line"></i>
                        </div>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <nav>
                        <ul className='desktop-mod'>
                            {/* <li>
                                <Link
                                    to={''}
                                    onMouseEnter={handleHealthActive}
                                    onMouseLeave={handleHealthDeActive}
                                    className="health-pointer"
                                >
                                    PERSONAL
                                </Link>
                            </li> */}
                            <li><Link to={''} onClick={handleMenuDeActive}>Products</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>Payments</Link></li>
                            <li><Link to={'/personal-detail'} onClick={handleMenuDeActive}>Increase Card</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>Offers</Link></li>
                            <li><Link to={''} onClick={handleMenuDeActive}>Quick Assistance</Link></li>
                        </ul>
                        <ul className={`mob-mod ${isLeftMenuActive ? 'menu-Active' : ''}`}>
                            <li>
                                <Link
                                    className='health-mob-pointer'
                                    onClick={handleHealthMobActive}
                                >
                                    Products
                                </Link>
                                {/* <ul className={`health-mob-hover ${isHealthMobActive ? 'health-mob-active' : ''}`}>
                                    <li><Link onClick={handleMenuDeActive}>Life Insurance</Link></li>
                                    <li><Link onClick={handleMenuDeActive}>Life Insurance</Link></li>
                                </ul> */}
                            </li>
                            <li><Link onClick={handleLeftMenuDeActive}>Payments</Link></li>
                            <li><Link to={'/personal-detail'} onClick={handleLeftMenuDeActive}>Increase Card</Link></li>
                            <li><Link onClick={handleLeftMenuDeActive}>Offers</Link></li>
                            <li><Link onClick={handleLeftMenuDeActive}>Quick Assistance</Link></li>
                            <div className="social-link">
                                <i className="ri-facebook-box-line"></i>
                                <i className="ri-instagram-line"></i>
                                <i className="ri-twitter-line"></i>
                            </div>
                        </ul>
                    </nav>
                    <div className="btn-box">
                        <div className="social-links">
                            <i class="ri-search-line"></i>
                            <i class="ri-whatsapp-line"></i>
                            <i class="ri-notification-2-line"></i>
                        </div>
                        <Link onClick={handleMenuDeActive} className=' whitespace-nowrap' to="/personal-detail">Login</Link>
                        {/* <div className="menu" onClick={handleMenuActive}>
                            <i className="ri-menu-line"></i>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;