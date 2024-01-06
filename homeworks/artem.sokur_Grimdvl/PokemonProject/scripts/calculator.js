const firstInputNumber = document.querySelectorAll('.number__first--input');
const firstOutputNumber = document.querySelector('.number__first--output');
const secondInputNumber = document.querySelectorAll('.number__second--input');
const secondOutputNumber = document.querySelector('.number__second--output');
const signSelect = document.querySelectorAll('.math__sign--select');
const signOutput = document.querySelector('.math__sign--output');
const outputs = document.querySelectorAll('.calculator__outputs-numbers div');
const equelButton = document.querySelectorAll('.equel--button');
const resultInput = document.querySelector('.result--input');
const resultOutput = document.querySelector('.output-result');
const equel = document.querySelectorAll('.output-equal');
const historyDiv = document.querySelector('.calculator__inputs-history');

const stateInputs = {};
const MAX_HISTORY_ITEMS = 3;

let result;

// transform value to numbers
const checkNumInputs = (selector) => {
    selector.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9.]/g, '');
        });
    });
};

const saveToLocalStorage = (operation) => {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    if (history.length >= MAX_HISTORY_ITEMS) {
        history.pop();
    }

    history.unshift(operation);
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
};

const getHistoryFromLocalStorage = () => {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    return history.slice(0, MAX_HISTORY_ITEMS);
};

const renderHistory = () => {
    historyDiv.innerHTML = '';
    const history = getHistoryFromLocalStorage();
    history.forEach((operation) => {
        const historyItem = document.createElement('p');
        historyItem.textContent = operation;
        historyDiv.appendChild(historyItem);
    });
};

const addTimeAndDate = () => {
    const currentDate = new Date();
    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    return formattedDate;
};

const updateHistory = () => {
    const formattedDate = new Date(stateInputs.dateOperation);
    const dateOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    const formattedDateTime = formattedDate.toLocaleDateString(undefined, dateOptions);

    const operationHistory = `
        Math. operation: ${stateInputs.firstNumber} ${stateInputs.sign} ${stateInputs.secondNumber} = ${stateInputs.result}. 
        Date of calculation: ${formattedDateTime}. 
        Time of function execution: ${stateInputs.timeOperation} ms.`;

    saveToLocalStorage(operationHistory);
    renderHistory();
};

const calculate = (firstNum, operator, secondNum) => {
    const startTime = performance.now();

    if (!firstNum || !secondNum) {
        outputs.forEach((item) => {
            item.textContent = '';
        });
        result = 'Enter all numbers';
    } else if (!operator) {
        outputs.forEach((item) => {
            item.textContent = '';
        });
        result = 'Invalid operator';
    } else {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);
        firstOutputNumber.textContent = num1;
        secondOutputNumber.textContent = num2;
        signOutput.textContent = operator;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (secondNum === 0) {
                    return 'Сant divide by zero';
                }
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            case '**':
                result = num1 ** num2;
                break;
            default:
                result = 'Invalid operator';
        }
        if (result > 100) {
            result = 'Too many';
        } else {
            result = Math.round(result * 100) / 100;
        }
        equel.forEach((item) => {
            item.textContent = '=';
        });
        if (result <= 1 && result >= -1) {
            result = `${result} pokemon`;
        } else {
            result = `${result} pokemons`;
        }
        const endTime = performance.now();
        let timeDiff = endTime - startTime;
        timeDiff = (timeDiff / 10).toFixed(3);

        const timeOperation = timeDiff;
        const dateOperation = addTimeAndDate();

        stateInputs.timeOperation = timeOperation;
        stateInputs.dateOperation = dateOperation;
    }
    stateInputs.result = result;
    resultOutput.textContent = result;
    return result;
};

// Calculator
const changeState = (state) => {
    const calculator = (event, elem, prop) => {
        checkNumInputs(firstInputNumber);
        checkNumInputs(secondInputNumber);

        elem.forEach((item) => {
            item.addEventListener(event, () => {
                const items = item.value;
                switch (item.nodeName) {
                    case 'INPUT':
                        if (item.classList.contains('number__first--input')) {
                            state[prop] = items;
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                        } else if (item.classList.contains('number__second--input')) {
                            state[prop] = items;
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                        }
                        break;
                    case 'SELECT':
                        if (item.classList.contains('math__sign--select')) {
                            state[prop] = items;
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                        }
                        break;
                    case 'BUTTON':
                        if (item.classList.contains('equel--button')) {
                            state[prop] = result;
                            updateHistory();
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                            resultInput.textContent = result;
                        }
                        break;
                    default:
                        console.log('Error');
                }
                console.log(state);
                return result;
            });
        });
    };
    calculator('input', firstInputNumber, 'firstNumber');
    calculator('input', secondInputNumber, 'secondNumber');
    calculator('change', signSelect, 'sign');
    calculator('click', equelButton, 'result');
};
changeState(stateInputs);

window.addEventListener('DOMContentLoaded', () => {
    renderHistory();
});
