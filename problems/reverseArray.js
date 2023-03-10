console.log('************REVERSE ARRAY***************');
const reverseArray = function (arr) {
  let n = arr.length;
  function reverse(arr, i, j) {
    console.log(n - 1);
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return reverse(arr, i + 1, j - 1);
    } else return arr;
  }
  return reverse(arr, 0, n - 1);
};

console.log('Hello', reverseArray([1, 2, 3, 4, 5, 6]));
