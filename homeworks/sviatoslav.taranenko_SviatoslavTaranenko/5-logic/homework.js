/**
 *
 * @param firstValue string with first number
 * @param secondValue string with second number
 * @param operation string with operation symbol
 * @returns {string|number} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */
function calculate(firstValue, secondValue, operation) {
    const firstNumber = Number(firstValue);
    const  secondNumber = Number(secondValue);
    const LocalOperation = operation;

    let result = 0;

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        return "Enter a number";
    }

    if (firstValue === "" || secondValue === "") {
        return "Enter a number";
    }

    if (result > 100) {
        return "Result is too big";
    }


    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                return "You cannot divide by zero"
            }
            result = firstNumber / secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        default:
            return "Choose a valid operation";
    }
    return result
}

result.style.textAlign = "center"
firstValue.style.textAlign = "center"
secondValue.style.textAlign = "center"

window.calculate = calculate;
