// let title = "Basic math operation"
// document.write(title);

// document.write(title);

// console.log(title);

// let firstNumber = 20;
// let secondNumber = 30;

// let result1 = firstNumber + secondNumber;

// document.write('Operation addition:', firstNumber, '+', secondNumber, '=', result1);

// console.log('Operation addition:', firstNumber, '+', secondNumber, '=', result1);

// let result2 = firstNumber - secondNumber;
// document.write('Operation addition:', firstNumber, '-', secondNumber, '=', result2);

//  console.log('Operation addition:', firstNumber, '-', secondNumber, '=', result2);

// let result3 = firstNumber * secondNumber;
// document.write('Operation addition:', firstNumber, '*', secondNumber, '=', result3);

// console.log('Operation addition:', firstNumber, '*', secondNumber, '=', result3);

// let result4 = firstNumber / secondNumber;
// document.write('Operation addition:', firstNumber, '/', secondNumber, '=', result4);

// console.log('Operation addition:', firstNumber, '/', secondNumber, '=', result4);

// let result5 = firstNumber % secondNumber;
// document.write('Operation addition:', firstNumber, '%', secondNumber, '=', result5);

// console.log('Operation addition:', firstNumber, '%', secondNumber, '=', result5);

// let result6 = firstNumber ** secondNumber;
// document.write('Operation addition:', firstNumber, '**', secondNumber, '=', result6);

// console.log('Operation addition:', firstNumber, '**', secondNumber, '=', result6);





// let container = document.getElementById("container");
// let newElement = document.createElement("h1");
// newElement.textContent = "Новий елемент створений з JavaScript";
// container.appendChild(newElement);


// <p id="myParagraph">Цей текст буде змінений через JavaScript.</p>
//
// <script>
//     var element = document.getElementById("myParagraph");
//     element.textContent = "Новий текст, переданий з JavaScript";
// </script>

let title = "Basic math operations";

let resultsDiv = document.getElementById("results");

function addResult(title, expression, result) {
    let resultParagraph = document.createElement("p");
    resultParagraph.textContent = `${title}: ${expression} = ${result}`;
    resultsDiv.appendChild(resultParagraph);
}

let firstNumber = 20;
let secondNumber = 30;

let result1 = firstNumber + secondNumber;
addResult("Operation addition", `${firstNumber} + ${secondNumber}`, result1);

let result2 = firstNumber - secondNumber;
addResult("Operation subtraction", `${firstNumber} - ${secondNumber}`, result2);

let result3 = firstNumber * secondNumber;
addResult("Operation multiplication", `${firstNumber} * ${secondNumber}`, result3);

let result4 = firstNumber / secondNumber;
addResult("Operation division", `${firstNumber} / ${secondNumber}`, result4);

let result5 = firstNumber % secondNumber;
addResult("Operation modulo", `${firstNumber} % ${secondNumber}`, result5);

let result6 = firstNumber ** secondNumber;
addResult("Operation exponentiation", `${firstNumber} ** ${secondNumber}`, result6);
