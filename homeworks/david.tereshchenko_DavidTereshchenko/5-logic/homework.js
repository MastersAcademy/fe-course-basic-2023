// const operator = document.querySelector('.operator');
// const btn = document.querySelector('.button');
//
// btn.onclick = function () {
//     const one = Number(document.getElementById('firstNumber').value);
//     const two = Number(document.getElementById('secondNumber').value);
//     const result = document.querySelector('.result');
//
//     let calc;
//
//     if (Number.isNaN(one) || Number.isNaN(two)) {
//         result.innerHTML = 'Enter a number';
//         return result;
//     }
//
//     switch (operator.value) {
//         case '+':
//             calc = one + two;
//             break;
//
//         case '-':
//             calc = one - two;
//             break;
//
//         case '*':
//             calc = one * two;
//             break;
//
//         case '/':
//             if (two === 0) {
//                 result.innerHTML = 'Number must not be zero';
//                 return result;
//             }
//             calc = one / two;
//             break;
//
//         default:
//             result.innerHTML = 'Choose a valid operation';
//             return result;
//     }
//
//     if (calc > 100) {
//         result.innerHTML = 'Result is too big';
//         return result;
//     }
//
//     result.innerHTML = calc;
//
//     return result;
// };
