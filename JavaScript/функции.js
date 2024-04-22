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