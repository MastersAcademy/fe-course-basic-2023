const operator = document.querySelector('select');
const btn = document.querySelector('button');

btn.onclick = function () {
    const one = Number(document.querySelector('.one').value);
    const two = Number(document.querySelector('.two').value);
    const result = document.querySelector('.result');

    switch (operator.value) {
        case '+':
            result.innerHTML = one + two;
            break;

        case '-':
            result.innerHTML = one - two;
            break;

        case '*':
            result.innerHTML = one * two;
            break;

        case '/':
            result.innerHTML = one / two;
            break;

        case '%':
            result.innerHTML = one % two;
            break;

        case '**':
            result.innerHTML = one ** two;
            break;

        default:
            break;
    }
};
