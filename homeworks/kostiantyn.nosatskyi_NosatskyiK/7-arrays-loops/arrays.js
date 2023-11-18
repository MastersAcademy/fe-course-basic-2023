const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

console.log(maxNumberOfArr(arrayOne)); // 44
console.log(maxNumberOfArr(arrayTwo)); // -1
console.log(maxNumberOfArr(arrayThree)); // 7
console.log(maxNumberOfArr(arrayFour)); // 5
console.log(maxNumberOfArr(arrayFive)); // 5

// function minNumberOfArr(array) {
//     let minNumber = array[0];
//
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < minNumber)
//             minNumber = array[i];
//     }
//     return minNumber;
// }
//
// console.log(minNumberOfArr(arrayOne)); // -12
// console.log(minNumberOfArr(arrayTwo)); // -8
// console.log(minNumberOfArr(arrayThree)); // 1
// console.log(minNumberOfArr(arrayFour)); // -3
// console.log(minNumberOfArr(arrayFive)); // -3

// function sumNumbersOfArr(array) {
//     let sumNumbers = array[0];
//
//     for (let i = 1; i < array.length; i++) {
//         if (typeof array[i] === 'number' && !Number.isNaN(array[i]))
//             sumNumbers = sumNumbers + array[i];
//     }
//     return sumNumbers;
// }
//
// console.log(sumNumbersOfArr(arrayOne)); // 32
// console.log(sumNumbersOfArr(arrayTwo)); // -11
// console.log(sumNumbersOfArr(arrayThree)); // 11
// console.log(sumNumbersOfArr(arrayFour)); // 6
// console.log(sumNumbersOfArr(arrayFive)); // 6

// function onlyNegativeNumbers(array) {
//     const negativeNumbers = array.filter(function(number) {
//         return number < 0;
//     });
//     return negativeNumbers;
// }
//
// console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
// console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
// console.log(onlyNegativeNumbers(arrayThree)); // []
// console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
// console.log(onlyNegativeNumbers(arrayFive)); // [-3]
//
// function onlyPositiveNumbers(array) {
//     const positiveNumbers = array.filter(function(number){
//         return number > 0;
//     })
//     return positiveNumbers;
// }
//
// console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
// console.log(onlyPositiveNumbers(arrayTwo)); // [];
// console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
// console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
// console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

// =====================================================

// tasks with an asterisk
//
// a function that returns the length of an array element

// const arrayTest = ['I', 'am', 'learning', 'front end', 'with', 'Masters of code'];
//
// function customMap(array) {
//     const stringLength = array.map((current) => {
//         return current.length;
//     })
//     return stringLength;
// }
//
// console.log(customMap(arrayTest));

// a function that returns only even numbers from an array

// function evenNumber(array) {
//     return array.reduce((acc, current) => {
//         if ((current % 2) === 0){
//             acc.push(current);
//         }
//         return acc;
//     }, []);
// }
// console.log(evenNumber(arrayOne));
