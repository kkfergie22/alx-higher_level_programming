#!usr/bin/node

/**
 * Script to concatenate two arguments
 * in the manner argument1 "is" argument2
 */

const first = process.argv[2];
const second = process.argv[3];

console.log(first + ' is ' + second);
