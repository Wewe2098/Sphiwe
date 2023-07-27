function calculateInterestRate(balance, time, rate) {
    const interest = (balance * rate * time) / 100;
    return interest;
  }
  
  function depositAmount(account, amount) {
    let currentBalance = account.balance;
    currentBalance += amount;
    account.balance = currentBalance;
  }
  
  