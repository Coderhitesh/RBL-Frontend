import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'

function OTP() {
  const [otp, setOTP] = useState([])

  const otpFetch = async () => {
    try {
      const response = await axios.get('https://www.rbl.digiindiasolutions.com/v1/getotp')
      console.log(response.data.data)
      setOTP(response.data.data)
    } catch (error) {
      console.log(error)
      toast.error('Failed to fetch OTPs')
    }
  }

  const handleDeleteOTP = async (_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this OTP?")
    if (!confirmDelete) return

    try {
      const response = await axios.delete(`https://www.rbl.digiindiasolutions.com/v1/deleteotp/${_id}`)
      toast.success('OTP Deleted')
      // Refresh the OTP list
      otpFetch()
    } catch (error) {
      console.log(error)
      toast.error('Internal Error')
    }
  }

  useEffect(() => {
    otpFetch()
  }, [])

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 whitespace-nowrap px-6 text-left">OTP</th>
              <th className="py-3 whitespace-nowrap px-6 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {otp && otp.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.otp}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <button onClick={() => handleDeleteOTP(item._id)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default OTP
