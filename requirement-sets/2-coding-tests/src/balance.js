function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonth) {
  let finalSum = openingSum;

  for (let i = 1; i <= numMonth; i++) {
    const interest = finalSum * (interestRate / 100);
    let tax = 0;
    if (finalSum > taxFreeLimit) {
      tax = (finalSum - taxFreeLimit) * (taxRate / 100);
    }
    finalSum += interest - tax;
  }

  return finalSum;
}

// console.log(balance(10000, 1, 20000, 1, 2));
// console.log(balance(25000, 2, 20000, 1, 2));
// console.log(balance(19800, 2, 20000, 1, 2));
