const operator = document.querySelector('select');
const btn = document.querySelector('button');

btn.onclick = function () {
    const one = Number(document.querySelector('.one').value);
    const two = Number(document.querySelector('.two').value);
    const result = document.querySelector('.result');

    let calc = null;

    switch (operator.value) {
        case '+':
            calc = one + two;
            break;

        case '-':
            calc = one - two;
            break;

        case '*':
            calc = one * two;
            break;

        case '/':
            calc = one / two;
            break;

        case '%':
            calc = one % two;
            break;

        case '**':
            calc = one ** two;
            break;

        default:
            break;
    }
    result.innerHTML = calc;
};
