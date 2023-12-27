/**
 *
 * @param firstValue string with first number
 * @param secondValue string with second number
 * @param operation string with operation symbol
 * @returns {games} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */
function calculate(firstValue, secondValue, operation) {
    const startTime = new Date();
    const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const padZero = (num) => (num < 10 ? `0${num}` : num);
    const formattedStartTime = `${padZero(startTime.getDate())}-${monthAbbreviations[startTime.getMonth()]}-${startTime.getFullYear()}, ${padZero(startTime.getHours())}:${padZero(startTime.getMinutes())}`;
    let resultOperation = 0;
    let resultMessage = '';

    if (Number.isNaN(+firstValue) || Number.isNaN(+secondValue)) {
        return {
            result: 'Error: Enter a number',
        };
    }

    switch (operation) {
        case '+':
            resultOperation = Number(firstValue) + Number(secondValue);
            break;
        case '-':
            resultOperation = Number(firstValue) - Number(secondValue);
            break;
        case '*':
            resultOperation = Number(firstValue) * Number(secondValue);
            break;
        case '/':
            resultOperation = Number(firstValue) / Number(secondValue);
            break;
        default:
            return {
                result: 'Choose a valid operation',
            };
    }
    if (resultOperation === 1) {
        resultMessage = `${resultOperation} game`;
    } else if (resultOperation > 1 && resultOperation <= 100) {
        resultMessage = `${resultOperation} games`;
    } else {
        resultMessage = 'Result is too big';
    }
    const endTime = new Date();
    const executionTime = endTime - startTime;
    return {
        startedTime: formattedStartTime,
        result: resultMessage,
        benchmark: executionTime,
    };
}

window.calculate = calculate;
