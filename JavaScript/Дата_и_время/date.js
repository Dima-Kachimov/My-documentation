'use strict';

// Начало исчесление милисекунт с 1970го 1970-01-01T00:00:00.000Z
// Для получения даты ниже 1970го new Date(-238403984023)


const now = new Date() // Создать обьект с текущей датой (Из системы)
const nowInput = new Date('2024-06-24') // Создать обьект с датой из инпута с типом дата
const nowDate = new Date(2024, 5, 25, 6, 14, 30, 10) // 2024-06-25T03:14:30.010Z по гринвичу
const nowMns = new Date(0)  // Милисекунд 1970-01-01T00:00:00.000Z
const oldDate = new Date(-2342343423234)  // 1895-10-10T13:02:56.766Z


// Методы получение компонентов даты
const year = now.getFullYear() // получить год ХХХХ
const month = now.getMonth() // получить месяц (начинаеться с нуля поэтому +  1)
const date = now.getDate() // Получить день
const hour = now.getHours() // Получить часы
const minute = now.getMinutes() // Получить минуты
const second = now.getSeconds() // Получить секунды
const milliseconds = now.getMilliseconds() // Получить милисекунды
const dayNumber = now.getDay() // Получить день недели (Номер) С воскрксения - 0  день
const UTSTime =  now.getUTCHours()  // Получить часы в UTC


// Методы установки компонентов даты
now.setFullYear(2014)
now.setMonth(0)
now.setDate(1)
now.setHours(23)
now.setMinutes(10)
now.setSeconds(30)
now.setMilliseconds(40)


// Другие методы
const difference =  now.getTimezoneOffset()  // Получить разницу между часовым поясом и UTC в минутах
const  timestamp = now.getTime()  //  Получить данные в милисекндах 1719297693718 с 1970го


let start  =  new Date()
for (let i  =  0;  i <  100000; i++) {
    let some = i ** 3
}

let end =  new Date();
console.log(end - start)

// const now = new Date.parse('2024-06-24')