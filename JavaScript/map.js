// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
// Внутри Map это масив масивов

// Отличия от обьектов
// 1 - Ключи любого типа
// 2 - Порядок добоавления по времени добовления
// 3 - Если карта пусая в ней ничего не будет содержаться
// 4 - Карты легче переберать
// 5 - Легко получить размер карты

const shops = [
    {rice: 500},
    {Oil: 200},
    {bread: 50}
]
const map = new Map()

// Методы
map.set(shops[0], 5000) // Установить
map.get(shops[0]) // Получить
map.has(shops[0]) // Проверить на наличие Boolean
map.delete(shops[0]) // Удвлить
map.clear() // Очистить карту
map.size; // Количество елемнов в карте

map.keys(); // Для итерации по ключам
map.values(); // Для итерации по заначению
map.entries(); // Для итерации ключ и значение
map.forEach((item) => {}) // Для итерации

//map.keys()
const goods = []
for (let shop of map.keys()){
    goods.push(Object.keys(shop)[0])
}

// map.values()
let totalPrice = 0
for (let price of map.values()){
    totalPrice += price
}

// map.entries()
for (let [key, value] of map.entries()){
    console.log(`Товар: ${Object.keys(key)[0]}, Количество: ${Object.values(key)[0]}, Бюджет: ${value};`)
}

// forEach()
map.forEach((value, key, map) => console.log(value, key))

// Из обьекта в Map
const userMap = new Map(Object.entries({name: 'Alex', birthday: '1990-01-01'}));
// Из Map в обьект
const newUserObl = Object.fromEntries(userMap);