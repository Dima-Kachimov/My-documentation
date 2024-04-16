const array = [1, 2, 3, 4, 5, 6];


// ИЗМИНЕНИЕ МАССИВА
array.push(6); // - Добавить элемент в конец массива
array.unshift(1); // - Добавить элемент в начало массива
// Удалить из исходного
array.pop(); // - Удоляет последний елемент массива
array.shift(); // - Удоляет первый елемент массива
array.splice(2, 3, 3); // - Вырезает и изменяет исходный массив
// Другие
array.reverse(); // - Меняет исходный массив переворачивает его задом наперед
array.sort(); // - На месте сортирует элементы массива и возвращает отсортированный массив.
array.fill(6, 0, 10); // - Заполняет все элементы массива от начального до конечного индексов одним значением.


// НОВЫЙ МАССИВ
// Вычислить из исходного
array.map(() => {}) // - Создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// Фильтрировать по условию
array.filter(() => {}) // - Создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// Чать исходного
array.slice(2, 4) // - Возвращает новый массив, содержащий копию части исходного массива.
// Соединение с другим
array.concat(array) // - Соединяет исходный с другим из аргумента
// Сплющивание исходного
array.flat(2) // -  Возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
array.flatMap(() => {}) // flat() + map()


// ИНДЕКС МАССИВА
// По значению
array.indexOf(6, 2) // - Возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
// По тестовому условию
array.findIndex(() => {}) // - Возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.


// ЭЛЕМЕНТ МАССИВА
// По тестовому условию
array.find(() => {}) // - Возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.


// СОДЕРЖИТ ЛИ МАССИВ <boolean>
// По значению
array.includes(1) // - Определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
// По тестовому условию
array.some(() => {}) // - Проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
array.every(() => {}) // - Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.


// НОВАЯ СТРОКА
// По строке разделителю
array.join() // - Объединяет все элементы массива (или массивоподобного объекта) в строку.


// ПРЕОБРАЗОВАНИЕ В ЗНАЧЕНИЕ
// По аккомулятору
array.reduce((acc) => {}, 0) // - Применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.


// ИТЕРАЦИЯ МАССИВА
array.forEach(() => {}); //- Не изменяет массив не возвращает его




// МЕТОДЫ ПЕРЕБОРА МАССИВА
// Перебор массива через цикл for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// Перебор массива через цикл for of (Также строки, псевдомасивы, map, set)
for (let value of array) {
    console.log(value);
}
// Перебор массива через метод .forEach()
array.forEach((item, index, arr) => {
    console.log(`${item} елемент массива ${arr} его индекс ${index}`);
});
