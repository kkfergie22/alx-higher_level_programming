#!/usr/bin/node

exports.logMe = function (item) {
  if (item === undefined) {
    console.log('0: undefined');
  } else {
    console.log(`${Object.keys(exports).length - 1}: ${item}`); // Object.keys(exports).length - 1 is the number of keys in exports, minus 1
  }
};
