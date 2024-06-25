'use strict';
// Динамическая  структура для очистки мусора

// WeakMap() - ключи только обьекты, если ссылка на обьект исчезает то и из WeakMap тоже удаляеться
// Методы WeakMap()
// set, get, delete, has

// Проблема
let user = {name: 'Ivan'}
const map = new Map()
map.set(user, 'data')
user = null
console.log(user, map)

// Очистка памяти
let cache = new WeakMap()

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena))
console.log(cache.has(alex))

// WeakSet() - только обьекты
// Методы WeakSet()
// add, delete, has

let messages = [
    {text: 'Hello', from: 'Alex'},
    {text: 'Hi Hi', from: 'Ivan'},
    {text: '.....', from: 'b'}
]

let readMessages = new WeakSet()

readMessages.add(messages[0])
// readMessages.add(messages[1])

messages.shift()

console.log(readMessages.has(messages[0]))