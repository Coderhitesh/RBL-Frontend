import React, { useEffect } from 'react';
import './PersonalInfo.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PersonalInfo() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const navigate = useNavigate();

    const handleRedirect = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        sessionStorage.setItem('personalInfo', JSON.stringify(data));

        toast.success('Personal Data Saved');
        navigate('/personal-detail/creadit-detail');
    };

    return (
        <section className='PersonalInfo-section'>
            <ToastContainer />
            <div className="w-full md:w-96 md:max-w-full mx-auto">
                <div className="p-6 border border-gray-300 sm:rounded-md">
                    <form method="POST" onSubmit={handleRedirect}>
                        <label className="block mb-6">
                            <span className="text-gray-700">Your name</span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="block w-full mt-1 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring p-2 focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Your name"
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Email</span>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Email"
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Mobile Number</span>
                            <input
                                id="number"
                                name="number"
                                type="number"
                                className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Mobile Number"
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Pan Card Number</span>
                            <input
                                id="panCardNumber"
                                name="panCardNumber"
                                type="text"
                                className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Pan Card Number"
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Postal Code</span>
                            <input
                                id="postalCode"
                                name="postalCode"
                                type="text"
                                className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Postal Code"
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Reference Number</span>
                            <input
                                id="referenceNumber"
                                name="referenceNumber"
                                type="text"
                                className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Reference Number"
                                required
                            />
                        </label>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="h-10 px-5 border outline-none text-indigo-100 bg-[#ED3338] rounded-lg p-2 transition-colors duration-150 focus:shadow-outline hover:bg-[#ec262c]"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default PersonalInfo;
