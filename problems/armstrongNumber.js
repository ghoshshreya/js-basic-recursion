function isArmstrong(num) {
  const length = num.toString().length;
  function check(num1, sum) {
    if (num1 === 0) return sum;
    sum = sum + Math.pow(num1 % 10, length);
    return check(Math.floor(num1 / 10), sum);
  }
  const sum = check(num, 0);
  return sum === num;
}

console.log(isArmstrong(153));
