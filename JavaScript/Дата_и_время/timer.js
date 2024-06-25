'use strict';

// Дата отсчета
const deadLine = '2024-06-29'

// Функция которая высчитывает сколько времени от сегодня до конца (акции)
function getTimeRemaining(endTime) {
    const  time  = Date.parse(endTime) -  new Date();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours  = Math.floor(time / (1000 * 60 * 60) % 24);
    const minutes  = Math.floor((time / 1000 / 60) % 60);
    const seconds  = Math.floor((time / 1000) % 60);

    return  {
        total:  time,
        days,
        hours,
        minutes,
        seconds
    }
}

// Установка таймера на странице
function setClock (selector, endTime) {
    const timer= document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    const timeInterval = setInterval(updateTime, 1000);

    updateTime()

    // Функция обновления таймера
    function updateTime() {
        const time  = getTimeRemaining(endTime);
        days.innerHTML = getZeroNumbers(time.days);
        hours.innerHTML = getZeroNumbers(time.hours);
        minutes.innerHTML = getZeroNumbers(time.minutes);
        seconds.innerHTML = getZeroNumbers(time.seconds);

        if (time.hours <= 0) {
            clearInterval(timeInterval)
        }
    }
}

setClock('.timer', deadLine)

// Функция для модивикации значений
function getZeroNumbers (num) {
    if(num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num
    }
}