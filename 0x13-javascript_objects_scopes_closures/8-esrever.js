#!/usr/bin/usr/node

exports.esrever = function (list) {
  const reversedList = [];
  const listLength = list.length;
  for (let i = 0; i < listLength; i++) {
    reversedList.push(list.pop());
  }
  return reversedList;
};
