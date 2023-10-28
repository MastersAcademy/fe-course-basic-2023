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
addResult("Operation addition:", `${firstNumber} + ${secondNumber}`, result1);

let result2 = firstNumber - secondNumber;
addResult("Operation addition:", `${firstNumber} - ${secondNumber}`, result2);

let result3 = firstNumber * secondNumber;
addResult("Operation addition:", `${firstNumber} * ${secondNumber}`, result3);

let result4 = firstNumber / secondNumber;
addResult("Operation addition:", `${firstNumber} / ${secondNumber}`, result4);

let result5 = firstNumber % secondNumber;
addResult("Operation addition:", `${firstNumber} % ${secondNumber}`, result5);

let result6 = firstNumber ** secondNumber;
addResult("Operation addition:", `${firstNumber} ** ${secondNumber}`, result6);
