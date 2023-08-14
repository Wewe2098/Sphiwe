import React, { useState } from 'react';

const InterestCalculator = () => {
  const [shoppingTotal, setShoppingTotal] = useState('');
  const [months, setMonths] = useState('');
  const interestRate = 0.2; // 20% interest rate

  const calculatePayment = () => {
    if (shoppingTotal && months) {
      const totalPaid = shoppingTotal * (1 + interestRate);
      const monthlyPayment = totalPaid / months;
      return monthlyPayment.toFixed(2);
    }
    return '';
  };

  return (
    <div className="container mt-4">
      <h2>Interest Calculator</h2>
      <div className="mb-3">
        <label className="form-label">Shopping Total</label>
        <input
          type="number"
          className="form-control"
          value={shoppingTotal}
          onChange={(e) => setShoppingTotal(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Number of Months</label>
        <input
          type="number"
          className="form-control"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={calculatePayment}>
          Calculate
        </button>
      </div>
      <div>
        {calculatePayment() && (
          <div>
            <p>Monthly Payment: ${calculatePayment()}</p>
            <p>Total Paid: ${(shoppingTotal * (1 + interestRate)).toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestCalculator;
