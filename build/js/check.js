'use strict';

function getMessage(a, b) {
    if (typeof a === 'boolean') {
    return 'Я попал в ' + b + '';
   }else {
    return 'Я никуда не попал';
   }else if (typeof a === 'number') {
     return 'Я прыгнул на  ' + a + ' * 100 сантиметров';
   }if (Array.isArray(a) && Array.isArray(b)) {
         'Я прошёл ' + getArrayMultiplicatingSum(a, b) + ' метров';
    }if (Array.isArray(a)) {
         'Я прошёл ' + getArraySum(a) + ' метров';
              }
    };

    function getArraySum(array){
      var sum = 0;
      for(var i = 0; i < array.length; i++){
      sum += array[i];
      }
      return(sum);
       };


  function getArrayMultiplicatingSum(a, b){
      var sum = 0;
      for (var i = 0; i < array.length; i++)
      sum += a[i] * b[i];
      }
      return(sum);
      };
