function getFactorial(num) {
  let factorial = 1;
  function calculate(num1) {
    if (num1 === 0) return;
    factorial = factorial * num1;
    calculate(num1 - 1);
  }
  calculate(num);
  return factorial;
}

console.log(getFactorial(5));
