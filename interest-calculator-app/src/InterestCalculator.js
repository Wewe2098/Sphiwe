// src/components/InterestCalculator.js
import React, { useState } from 'react';

function InterestCalculator() {
  const [shoppingTotal, setShoppingTotal] = useState('');
  const [months, setMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);

  const calculateInterest = (e) => {
    e.preventDefault();

    const interestRate = 0.2; // 20%
    const parsedShoppingTotal = parseFloat(shoppingTotal);
    const parsedMonths = parseInt(months);

    const monthlyInterest = (parsedShoppingTotal * interestRate) / parsedMonths;
    const totalPayment = parsedShoppingTotal + (monthlyInterest * parsedMonths);

    setMonthlyPayment(monthlyInterest.toFixed(2));
    setTotalPaid(totalPayment.toFixed(2));
  };

  return (
    <div>
      <h1>Interest Calculator</h1>
      <form onSubmit={calculateInterest}>
        <label htmlFor="shopping-total">Shopping Total:</label>
        <input
          type="number"
          id="shopping-total"
          value={shoppingTotal}
          onChange={(e) => setShoppingTotal(e.target.value)}
          required
        />

        <label htmlFor="months">Months to Pay:</label>
        <input
          type="number"
          id="months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          required
        />

        <button type="submit">Calculate</button>
      </form>

      {monthlyPayment !== 0 && totalPaid !== 0 && (
        <div>
          <p>Monthly Payment: {monthlyPayment}</p>
          <p>Total Paid: {totalPaid}</p>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;
