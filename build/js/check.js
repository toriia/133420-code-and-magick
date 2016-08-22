'use strict';

function getMessage(a, b) {
  if (typeof a === 'boolean') {
    if (a === true) {
      return 'Я попал в ' + b + '';
    } else {
      return 'Я никуда не попал';
    }

  } else if (typeof a === 'number') {
    return 'Я прыгнул на ' + (a * 100) + ' сантиметров';

  } else if (Array.isArray(a) && Array.isArray(b)) {
    return 'Я прошёл ' + getArrayMultiplicatingSum(a, b) + ' метров';

  } else if (Array.isArray(a)) {
    return 'Я прошёл ' + getArraySum(a) + ' шагов';
  }
}



function getArraySum(array) {
  var sum = 0;

  for(var i = 0; i < array.length; i++) {
  sum += array[i];
  }

  return sum;
  }


function getArrayMultiplicatingSum(a, b) {
  var sum = 0;

  for (var i = 0; i < a.length; i++) {
  sum += a[i] * b[i];
  }

  return sum;
  }
