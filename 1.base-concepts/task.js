"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) { 
    arr.push(-b/(2*a));
  }
  else if (d > 0) {
      arr.push((-b + Math.sqrt(d) )/(2*a));
      arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
    const perMonth = percent / 100 / 12;
    const bodyCredit = amount - contribution;
    const paymentMounth = bodyCredit * (perMonth + (perMonth / (((1 + perMonth) ** countMonths) - 1 )));
    const total = parseFloat((paymentMounth * countMonths).toFixed(2));
    return total;
  } 
}