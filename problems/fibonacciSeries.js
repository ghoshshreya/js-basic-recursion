// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

const getFibonacci = function (limit) {
  if (limit === 0) return 0;
  if (limit === 1) return 1;

  function getFibo(sum, a, b, i) {
    sum = a + b;
    if (i < limit - 1) {
      return getFibo(sum, b, sum, i + 1);
    } else {
      return sum;
    }
  }
  return getFibo(0, 0, 1, 1);
};

getFibonacci(5);
