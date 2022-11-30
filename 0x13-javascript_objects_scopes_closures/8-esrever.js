#!/usr/bin/usr/node

exports.esrever = function (list) {
  const reversed = [];
  for (let i = 0; i < list.length; i++) {
    reversed.push(list.pop()); // push() adds an element to the end of an array
  }
  return reversed;
};
