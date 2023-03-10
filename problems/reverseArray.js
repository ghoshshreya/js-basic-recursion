// Reverse an array using recursion
// I/P - [1, 2, 3, 4, 5]
// O/P - [5, 4, 3, 2, 1]
const reverseArray = function (arr) {
  let n = arr.length;
  function reverse(arr, i, j) {
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return reverse(arr, i + 1, j - 1);
    } else return arr;
  }
  return reverse(arr, 0, n - 1);
};

reverseArray([1, 2, 3, 4, 5, 6]);
