import React, { useEffect, useState } from 'react';
import './Auth.css';
import axios from 'axios';
import toast from 'react-hot-toast';
// import AllBlog from './AllBlog';
// import AddBlog from './AddBlog';
import PersonalInfo from './PersonalInfo';
import OTP from './OTP';


function Auth() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    const [isActive, setIsActive] = useState('personal-info');

    return (
        <section className='auth-section'>
            <div className="container">
                <div className="heading">
                    <span>Admin</span>
                </div>
                <div className="down">
                    <div className="buttons">
                        <button onClick={() => setIsActive('personal-info')}>Personal Info</button>
                        <button onClick={() => setIsActive('OTP')}>OTP</button>
                        {/* <button onClick={() => setIsActive('All-Email')}>Email</button>
                        <button onClick={() => setIsActive('All-blog')}>All Blog</button>
                        <button onClick={() => setIsActive('add-blog')}>Add Blog</button> */}
                    </div>
                    <div className="main-container">
                        {isActive === "personal-info" ? (
                            <PersonalInfo />
                        ) : isActive === 'OTP' ?(
                            <OTP />
                        ):(
                            <p>Page Not Found</p>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Auth;
