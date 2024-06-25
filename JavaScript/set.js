'use strict';

// Set - набор уникальных данных

const arr = [1,2,3,4,5,1,2,3,4,5];
const set = new Set(arr)

// Методы Set
set.add(6) // Добавить
set.delete(6) // Удалить
set.has(6) // Проверить на наличие
set.clear() // Очистить все
set.size // Размер?

// Итерация
for (let value of set) console.log(value)
set.forEach((el, el2 , set   ) => console.log(el, el2))


// Пример использования
function unique (arr) {
    return Array.from(new Set(arr))
}
console.log(unique(arr))