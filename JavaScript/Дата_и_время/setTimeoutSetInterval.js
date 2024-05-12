'use strict'



// Таймер - setTimeout()
// 1 аргумент - callback функция
// 2 аргумент - Время в милисекундах
// 3 аргумент - Дальше все аргументы через запятую которые принимает callback функция

const timeId = setTimeout((text) => {
    console.log(text)
}, 3000, 'Прощло 3 скунды')


// clearTimeout - принимает индетификатор таймера который был записан в переменную, для остановки таймера
clearTimeout(timeId)




// Интервальный таймер - setInterval()
// 1 аргумент - callback функция
// 2 аргумент - Время в милисекундах
// 3 аргумент - Дальше все аргументы через запятую которые принимает callback функция

let current = 0
const intervalId = setInterval(() => {
    console.log(`Прошло ${current} cек!`)
    ++current
}, 1000)


// clearInterval - принимает индетификатор таймера который был записан в переменную, для остановки таймера
clearInterval(intervalId)




// // Рекурсивыный вызов setTimeout() - решает проблему вызова долго обрабатывающего кода и вызывет посторно ее строго по времени
let id = setTimeout(function log() {
    if (current === 6) {
        clearTimeout(id);
        return;
    }
    console.log('hello');
    ++current;
    id = setTimeout(log, 1000);
}, 1000);





// Анимация с setTimeout() -- (самая простая)
function myAnimation() {
    const boxEl = document.querySelector('.box');
    let pos = 0;

    function frame() {
        if (pos === 300) {
            clearInterval(timerID);
        } else {
            pos++;
            boxEl.style.top = `${pos}px`;
            boxEl.style.left = `${pos}px`;
        }
    }
    const timerID = setInterval(frame, 10);
}
myAnimation();