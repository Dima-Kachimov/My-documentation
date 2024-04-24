// Преобразование типов


// 1) Преобразование в строку
// - String()
console.log(typeof String(1234)); // String
// - При сложении со строкой выдаст строку
console.log(typeof (5 + ''));  // String


// 2) Прербразование в чмсло
// - Number()
console.log(typeof Number('4')); // number
// - Преобразование с помощю унарного плюса
console.log(typeof +'4'); // number
// - parseInt()
console.log(typeof parseInt('10px', 10)); // - number


// 3) Логическое преобразование
// Всегда будет false
/*
 * 0 - ноль
 * '' - пустая строка
 * null
 * undefined
 * NaN
 */

// - Boolean()
console.log(typeof Boolean(1)); // Boolean
// - !!
console.log(typeof !!'1234567'); // Boolean
