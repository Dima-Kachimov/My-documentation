// Свойства и методы числ

// Библиотеки по работе с числами
// 1) Обект Math - имеет много методов по раьоте с числами

const num = 12.2
const strNum = '12.2px'

// Методы

// Округлкние
Math.round(num) // - Округление к ближащему целому


// Преобразовать в число + модифицыровать
parseInt(strNum) // => 12 Из строки в число и округление к целому числу + модификация
parseFloat(strNum) // => 12.2 Из строки в число + модификация

// В степень
Math.pow(3, 2) // - 3 в 2й степени