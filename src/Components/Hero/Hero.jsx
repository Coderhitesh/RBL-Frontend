import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';
import banner1 from './banner1.jpeg'
import banner2 from './banner2.jpeg'

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // Enable fade effect
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000 // Autoplay speed in milliseconds
    };

    return (
        <section className='hero-section'>
            <div className="hero-container">
                <Slider className='slider-main-box' {...settings}>
                    <div className='slider-box'>
                        <img src={banner1} alt="" />
                        {/* <h3>One</h3> */}
                        <div className="content">
                            <h2>Go Account</h2>
                            <p>Subscribe To Enjoy Zero Fee Banking</p>
                            <a href="">Know More</a>
                        </div>
                    </div>
                    <div className='slider-box'>
                        <img src={banner2} alt="" />
                        <div className="content">

                        <h2>RBL Bank is now live on GST portal for GST Payment</h2>
                            <p>Pay Via - Internet Banking | Branch</p>
                            <a href="">Know More</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Hero;
