function printNumbers(num) {
  console.log(num);
  if (num > 1) {
    printNumbers(num - 1);
  }
}

printNumbers(10);
