function atoi(str) {
  str = str.trim();
  const isNegative = str[0] === '-';
  if (str[0] === '-' || str[0] === '+') {
    str = str.substring(1);
  }
  str = str.split(' ')[0];

  function getAtoi(str, num) {
    //exit condition
    if (str.length === 0) return num;
    num = num + str[0] * Math.pow(10, str.length - 1);
    str = str.substring(1);
    return getAtoi(str, num);
  }

  let convertedVal = getAtoi(str, 0);

  return isNegative ? convertedVal * -1 : convertedVal;
}

console.log(atoi('-45'));
