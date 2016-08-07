/*
 3. В файле check.js создайте пустую функцию getMessage.
 Эта функция должна будет принимать на вход два параметра,
 a и b, анализировать их и возвращать сообщение-строку.

 Как должна работать функция?

 Если первый аргумент, a, имеет тип boolean, то:
 Если он true, вернуть строку, в которую подставлен параметр b:
 "Я попал в [b]"
 Если он false, то вернуть строку:
 "Я никуда не попал"

 Если первый аргумент имеет числовой тип, то вернуть строку:
 "Я прыгнул на [a] * 100 сантиметров"

 Если первый аргумент массив, то вернуть строку:
 "Я прошёл [numberOfSteps] шагов"
 где [numberOfSteps] — это сумма значений переданного массива

 Если оба аргумента массивы, то вернуть строку:
 "Я прошёл [distancePath] метров"
 где [distancePath] — это сумма произведений соответствующих
 элементов массивов a и b,
 cумма произведения первого элемента a с первым элементом b,
 второго со вторым и так далее
 */
function getMessage(a, b) {
    if (typeof a === 'boolean') {
        if (a) {
            return 'Я попал в [b]';
        } else {
            return 'Я никуда не попал';
        }
    } else if (typeof a === 'number') {
        return 'Я прыгнул на [' + a + '] * 100 сантиметров: ' + (a * 100);
    } else if (Array.isArray(a) && Array.isArray(b)) {
        var distancePath = 0;
        for (var i = 0; i < a.length; i++) {
            distancePath += a[i] * b[i];
        }
        return 'Я прошёл [' + distancePath + '] метров';

    } else if (Array.isArray(a)) {
        var numberOfSteps = 0;
        for (var i = 0; i < a.length; i++) {
            numberOfSteps += a[i];
        }
        return 'Я прошёл [' + numberOfSteps + '] метров';
    }
}

console.log(getMessage(true));
console.log(getMessage(false));
console.log(getMessage(12));
console.log(getMessage([1, 2, 3, 4, 5]));
console.log(getMessage([2, 4, 5], [1, 2, 3]));
