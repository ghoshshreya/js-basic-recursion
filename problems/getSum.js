// Sum of first N numbers
// https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/
function getSum(num) {
  let sum = 0;
  function calculate(num1) {
    if (num1 === 0) return;

    calculate(num1 - 1);
    sum = sum + num1;
    console.log(num1);
  }
  calculate(num);
  return sum;
}

console.log(getSum(5));
