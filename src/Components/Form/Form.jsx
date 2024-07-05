import React, { useState, useEffect } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [amountData, setAmountData] = useState(1);
    const [interestData, setInterestData] = useState(1);
    const [yearsData, setYearsData] = useState(1);

    const [loanEMI , setLoanEMI] = useState(0);
    const [interestPayable , setInterestPayable] = useState(0);
    const [totalPayment , setTotalPayment] = useState(0);

    const handleAmountChange = (event) => {
        setAmountData(event.target.value);
    };

    const handleInterestDataChange = (event) => {
        setInterestData(event.target.value);
    };

    const handleYearsDataChange = (event) => {
        setYearsData(event.target.value);
    };

    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('/personal-detail')
    }

    // Function to calculate EMI, Interest Payable, and Total Payment
    const calculateLoanDetails = () => {
        const principal = amountData;
        const annualInterestRate = interestData / 100;
        const monthlyInterestRate = annualInterestRate / 12;
        const numberOfPayments = yearsData * 12;

        // EMI Calculation
        const emi = principal * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1));
        setLoanEMI(emi.toFixed(2));
        
        // Total Payment Calculation
        const totalPayment = emi * numberOfPayments;
        setTotalPayment(totalPayment.toFixed(2));

        // Total Interest Payable Calculation
        const totalInterestPayable = totalPayment - principal;
        setInterestPayable(totalInterestPayable.toFixed(2));
    };

    // Use effect to recalculate values whenever inputs change
    useEffect(() => {
        calculateLoanDetails();
    }, [amountData, interestData, yearsData]);

    localStorage.setItem('Loan EMI',loanEMI);
    localStorage.setItem('Interest Payble',interestPayable);
    localStorage.setItem('Total payment',totalPayment);

    return (
        <section className='form-section'>
            <div className="form-container">
                <div className="heading">
                    <h2>Fixed <span>Deposit Calculator</span></h2>
                </div>
                <div className="detail">
                    <div className="form-parent">
                        <form className='up-form' action="">
                            <div className="loan-amount">
                                <div className="amountdetail">
                                    <label>Loan Amount</label>
                                    <div className="amount">
                                        <input type="text" disabled id="amount" name="amount" placeholder="₹" value={amountData} />
                                        <div className="icon-parent">
                                            <i className="ri-money-rupee-circle-line"></i>
                                        </div>
                                    </div>
                                </div>
                                <input type="range" id="amountRange" name="amountRange" min="1" max="10000000" value={amountData} onChange={handleAmountChange} />
                            </div>
                            <div className="loan-amount">
                                <div className="amountdetail">
                                    <label>Interest Rate</label>
                                    <div className="amount">
                                        <input type="text" disabled id="rate" name="rate" placeholder="" value={interestData} />
                                        <div className="icon-parent">
                                            <i className="ri-percent-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <input type="range" id="interestRange" name="interestRange" min="1" max="30" value={interestData} onChange={handleInterestDataChange} />
                            </div>
                            <div className="loan-amount">
                                <div className="amountdetail">
                                    <label>Loan Tenure</label>
                                    <div className="amount">
                                        <input type="text" disabled id="tenure" name="tenure" placeholder="" value={yearsData} />
                                        <div className="icon-parent">
                                            <p>Yr</p>
                                        </div>
                                    </div>
                                </div>
                                <input type="range" id="tenureRange" name="tenureRange" min="1" max="30" value={yearsData} onChange={handleYearsDataChange} />
                            </div>
                            <button type='submit' onClick={handleRedirect}>APPLY RBL CREDIT CARD</button>
                        </form>
                        <div className="down">
                            <div className="loan-emi">
                                <h2>Loan EMI:</h2>
                                <p>{loanEMI} INR</p>
                            </div>
                            <div className="loan-emi">
                                <h2>Total Interest Payable:</h2>
                                <p>{interestPayable} INR</p>
                            </div>
                            <div className="loan-emi">
                                <h2>Total Payment (Principal + Interest):</h2>
                                <p>{totalPayment} INR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;