#!/usr/bin/usr/node

exports.esrever = function (list) {
  const reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]); // push() adds an element to the end of an array
  }
  return reversed;
};
