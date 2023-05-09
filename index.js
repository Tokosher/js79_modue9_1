

// for (let i = 3; i > 0; i--) {
//     const delay = i * 1000;
//     console.log('DELAY: ' + delay);
//     console.log('i: ' + i);
//     setTimeout(() => console.log(i), delay);
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }
//
// console.log(i)

// sayHello()
//
// function sayHello () {
//     console.log('hello')
// }

// console.log(i)
// var i = 1;


const targetDate = new Date('Jan 1, 2024 00:00:00');
const dateArea = document.querySelector('#time');
const oneSecondInMs = 1000;
const oneMinuteInMs = oneSecondInMs * 60;
const oneHourInMs = oneMinuteInMs * 60;
const oneDayInMs = oneHourInMs * 24;

setInterval(() => {
    const currentDateInMs = Date.now();
    const targetDateInMs = targetDate.getTime();
    const distanceToTargetDate = targetDateInMs - currentDateInMs; // ms

    const daysRemaining = Math.floor(distanceToTargetDate / oneDayInMs);
    const hoursRemaining = Math.floor((distanceToTargetDate % oneDayInMs) / oneHourInMs);
    const minutesRemaining = Math.floor((distanceToTargetDate % oneHourInMs) / oneMinuteInMs)
    const secondsLeft = Math.floor((distanceToTargetDate % oneMinuteInMs) / oneSecondInMs)

    dateArea.innerText = `${daysRemaining} days ${hoursRemaining} hours ${minutesRemaining} minutes ${secondsLeft} seconds`;
}, 1000)
