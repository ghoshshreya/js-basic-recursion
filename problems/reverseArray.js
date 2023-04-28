function reverseArray(arr) {
  function reverse(arr, first, last) {
    if (first >= last) return;
    const temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    console.log(arr);
    reverse(arr, first + 1, last - 1);
  }
  reverse(arr, 0, arr.length - 1);
  return arr;
}

console.log(reverseArray([1, 2, 3]));
