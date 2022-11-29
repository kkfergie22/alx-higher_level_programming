#!/usr/bin/node

const x = parseInt(process.argv[2]);
if (isNaN(x)) {
  console.log(1);
}

console.log(factorial(x));
function factorial (x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
