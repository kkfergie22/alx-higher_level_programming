#!/usr/bin/node

exports.logMe = function (item) {
  const count = 0;
  if (item === undefined) {
    console.log('0: undefined');
  } else {
    console.log(count + ':' + item);
  }
};
