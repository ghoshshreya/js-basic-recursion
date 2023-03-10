// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// A man, a plan, a canal: Panama --> amanaplanacanalpanama

// RECURSIVE APPROACH
// AMAMA --> AMAMA
// 1. A === A
// 2. M === M
// 3. A is the last element
// Hence, pallindrome

// AMAMA --> AMAZA
// 1. A === A
// 2. M !== Z, break not a pallindrome

var isPalindrome = function (s) {
  let str = s
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<> \{\}\[\]\\\/]/gi, '');
  let n = str.length;
  function isPal(str, startIndex, endIndex) {
    if (startIndex === endIndex) {
      return true;
    } else if (str[startIndex] === str[endIndex]) {
      return isPal(str, startIndex + 1, endIndex - 1);
    }
    return false;
  }
  return isPal(str, 0, n - 1);
};

// console.log(
isPalindrome('A man, a plan, a canal: Panama');
// ? 'Input is a pallindrom'
// : 'Input is not a pallindrome'
// );
