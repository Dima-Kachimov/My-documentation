// Пример обьекта
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function () {
        console.log('Это метод этого обьекта')
    }
};


// Обращение к свойствам обьекта
const test = 'colors'
console.log(options.name) // test
console.log(options['width']) // 1024
console.log(options[test]['bg']) // 'red
options.makeTest() // 'Это метод этого обьекта'


// Удаление свойства из обьекта
delete options.name;


// Методы Object
Object.keys(options) // - Получаем массив из свойств обьекта (Как вариант потом получить количество всех свойств)
Object.values(options); // - Возврощает масив с значениями обьекта


// Перебор обьекта и его внутреннего обьекта как пример через for (let key in options) {}
for (let key in options) {
    if (typeof options[key] === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}


// - Пример подсчета всех свойств обекта через переменную counter
let counter = 0
for (let key in options) {
    counter++
}


// Диструктуризация обекта
// - name: rename - переименовать свойство
const {border, bg: background} = options.colors



// КОПИРОВАНИЕ ОБЬЕКТА ПРИМЕРЫ
// 1) - Использовать функцию (Без глубокой копии 'Поверхностная копия')
function copy (mainObj) {
    let objCopy = {}
    for (let key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy
}
// 2) - Использовать Object.assign(куда? , откуда ?) (Без глубокой копии 'Поверхностная копия')
// - Можно использовать для обьединения двух обьектов
const newObj = Object.assign({}, options)
// 3) - ES9 с использыванием SPREAD оператора
const myObj = {...options}
// 4) Глубокое копирование объекта
const copyJson = JSON.parse(JSON.stringify(options));