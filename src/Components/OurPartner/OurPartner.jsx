import React from 'react'
import './OurPartner.css'
import p1 from './p1.avif'
import p2 from './p2.avif'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'
import p6 from './p6.jpg'
import p7 from './p7.png'
import p8 from './p8.png'
import p9 from './p9.png'
import p10 from './p10.jpeg'
import p11 from './p11.png'
import p12 from './p12.webp'
import p13 from './p13.png'
import p14 from './p14.png'
import p15 from './p15.jpeg'
import p16 from './p16.png'
import p17 from './p17.jpeg'
import p18 from './p18.png'
import p19 from './p19.png'
import p20 from './p20.png'
import p21 from './p21.jpg'
import p22 from './p22.webp'
import p23 from './p23.png'
import p24 from './p24.png'

function OurPartner() {
    const data = [
        {
            id: 1,
            img: p1
        },
        {
            id: 2,
            img: p2
        },
        {
            id: 3,
            img: p3
        },
        {
            id: 4,
            img: p4
        },
        {
            id: 5,
            img: p5
        },
        {
            id: 6,
            img: p6
        },
        {
            id: 7,
            img: p7
        },
        {
            id: 8,
            img: p8
        },
        {
            id: 9,
            img: p9
        },
        {
            id: 10,
            img: p10
        },
        {
            id: 11,
            img: p11
        },
        {
            id: 12,
            img: p12
        },
        {
            id: 13,
            img: p13
        },
        {
            id: 14,
            img: p14
        },
        {
            id: 15,
            img: p15
        },
        {
            id: 16,
            img: p16
        },
        {
            id: 17,
            img: p17
        },
        {
            id: 18,
            img: p18
        },
        {
            id: 19,
            img: p19
        },
        {
            id: 20,
            img: p20
        },
        {
            id: 21,
            img: p21
        },
        {
            id: 22,
            img: p22
        },
        {
            id: 23,
            img: p23
        },
        {
            id: 24,
            img: p24
        },
    ]
    return (
        <section className='OurPartner-section'>
            <div className="OurPartner-container">
                <div className="heading">
                    <h2>Our <span>Partners</span></h2>
                    <p>Leading insurers for your financial freedom</p>
                </div>
                <div className="main-data">
                    {
                        data && data.map((item, index) => (
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurPartner
