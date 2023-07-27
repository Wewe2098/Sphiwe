function clcIntRt(b, t, r) {
    const i = (b * r * t) / 100;
    return i;
  }
  
  function depAmt(ac, a) {
    let b = ac.balance;
    b += a;
    ac.balance = b;
  }
  