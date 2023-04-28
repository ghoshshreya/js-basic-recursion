function isPallindrom(input) {
  let sum = 0;
  function check(num, x) {
    if (num === 0) return sum;
    x = (num % 10) * Math.pow(10, num.toString().length - 1);
    sum = sum + x;
    return check(Math.floor(num / 10));
  }
  const reverse = check(input);
  return reverse === input;
}

console.log(isPallindrom(121));
