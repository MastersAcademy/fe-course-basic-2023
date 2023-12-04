function displayExecutionTime() {
    const nowDate = new Date();
    const dateString = nowDate.toISOString();
    const timeElement = document.createElement('p');
    timeElement.textContent = `Time of function execution: ${dateString}`;
    document.body.appendChild(timeElement);
    console.log(nowDate);
    console.log(typeof nowDate);
    return nowDate;
}

const nowDate = displayExecutionTime();

// Unix time - count sec from 1970
const newDate1 = new Date(170013665000);
console.log(newDate1);

// you can add date params manually
const newDate2 = new Date(2023, 1, 6, 11);
console.log(newDate2);

// you can add date params like string
const newDate3 = new Date('2021 Sep 6');
console.log(newDate3);

const options = { year: '2-digit', month: 'long', day: 'numeric' }; // 2-digit - short
const uaLocaleDateString = nowDate.toLocaleDateString('uk-UA', options);
console.log(uaLocaleDateString);

// UTC
console.log(nowDate.toUTCString());

// just date
console.log(nowDate.toDateString());

// UTC in ISO
console.log(nowDate.toISOString());

// difference between UTC and our
console.log(nowDate.getTimezoneOffset());

console.log(nowDate.getFullYear());
console.log(nowDate.getMonth() + 1); //  starting з 0 - 11
console.log(nowDate.getDate()); // від 1 до 31
console.log(nowDate.getDay()); // починаючи з нд від 0 до 6
console.log(nowDate.getHours()); // від 0 до 24
console.log(nowDate.getMinutes()); // від 0 до 59
console.log(nowDate.getSeconds()); // від 0 до 59
console.log(nowDate.getTime()); // unixTime
console.log(Date.now());

const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

const getCurrentDate = () => {
    const date = new Date(2023, 1, 2, 1, 22);

    const Y = date.getFullYear();
    const M = addLeadingZero(date.getMonth() + 1);
    const D = addLeadingZero(date.getDate());
    const d = days[date.getDay()];
    const h = addLeadingZero(date.getHours());
    const m = addLeadingZero(date.getMinutes());

    return `${Y}.${M}.${D} ${h}:${m} (${d})`;
};

console.log(getCurrentDate());
