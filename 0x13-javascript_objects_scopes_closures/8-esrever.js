#!/usr/bin/usr/node

exports.esrever = function (list) {
  const reversedlist = [];
  for (let i = 0; i < list.length; i++) {
    reversedlist.push(list.pop()); // push() adds an element to the end of an array
  }
  return reversedlist;
};
