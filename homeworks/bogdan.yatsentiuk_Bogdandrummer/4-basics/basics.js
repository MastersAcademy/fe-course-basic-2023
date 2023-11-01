// Ввод чисел для математичних операцій
const a = +prompt('Введите первое число:');
const b = +prompt('Введите второе число:');
// Додавання
const add = a + b;
// Віднімання
const sub = a - b;
// Множення
const mul = a * b;
// Ділення
const division = a / b;
// Залишок від ділення
const rem = a % b;
// Піднесення до степені
const pow = a ** b;
console.log(`Operation addition: ${a} + ${b} = ${add}`);
console.log(`Operation subtraction: ${a} - ${b} = ${sub}`);
console.log(`Operation multiplication: ${a} * ${b} = ${mul}`);
console.log(`Operation division: ${a} / ${b} = ${division}`);
console.log(`Operation remainder of the division: ${a} / ${b} = ${rem}`);
console.log(`Operation raised to the power ${a} in pow ${b} =  ${pow}`);

// Вивід інформації на екран
const results = document.querySelector('.results');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
const message = document.createElement('p');

p1.innerHTML = `Operation addition: ${a} + ${b} = ${add}`;
p2.innerHTML = `Operation subtraction: ${a} - ${b} = ${sub}`;
p3.innerHTML = `Operation multiplication: ${a} * ${b} = ${mul}`;
p4.innerHTML = `Operation division: ${a} / ${b} = ${division}`;
p5.innerHTML = `Operation remainder of the division: ${a} / ${b} = ${rem}`;
p6.innerHTML = `Operation raised to the power ${a} in pow ${b} =  ${pow}`;
message.innerHTML = '<br/> Open console to see the results';
results.appendChild(p1);
results.appendChild(p2);
results.appendChild(p3);
results.appendChild(p4);
results.appendChild(p5);
results.appendChild(p6);
results.appendChild(message);
