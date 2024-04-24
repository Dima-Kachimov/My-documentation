// Function
// - Если нет return вернеться undefined

// Declaration function
// - + hosting
// - можно вызвать до ее обьявления
function decFn() {}

// Function expression - функионнальное вырожение
// - можно вызвать только после ее обьявления
const expFn = function () {}

// Arrow function - стрелосчная функция
// - не имеет своего контекста (this)
const arrowFn = () => {}

// Callback - это функция, переданная в другую функцию в качестве аргумента.
// - При передачи ее как аргумент не вызываеться
// - Вызываеться внутри другой фунции
function callback() {
    console.log('Я callback функция');
}
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

// ЗАМЫКАНИЕ

// Замыкане - это функция которая запаминает свои внешние переменные
// и может получить к ним доступ

function createCounter() {
    // Переменные которые будут замикаться (Внешние переменные функции myFunction)
    let counter = 0;
    const myFunction = function () {
        // Будет ссылаться на counter в createCounter
        counter = counter + 1;
        return counter;
    };
    // Чтобы функция ссылалась на окружение createCounter ее нужно вернуть
    return myFunction;
}
// Чтобы работать с замыканием нужно получить функции которая ссылаеться
// на окружения замыкания и работать с ней

const increment = createCounter(); // function - myFunction
const c1 = increment(); // 1
const c2 = increment(); // 2
const c3 = increment(); // 3
console.log(c1, c2, c3);