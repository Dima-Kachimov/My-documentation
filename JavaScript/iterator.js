'use strict'

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20.02.77',
    showMyPublicData: () => {
        console.log(this.name, this.surname)
    }
}

const arr = ['a', 'b', 'c']
const str = 'string'

//  For in  -  не рекомендуеться для перебора строк м масивов потомучто перебор может идти не по порядку (Перебор по ключам)
for (const key in user) {
    console.log(key, user[key])
}
for (const key in arr) {
    console.log(key, arr[key])
}
for (const key in str) {
    console.log(key, str[key])
}

// For of  -  можно использовать для перебора строк и масивов (перебор по значению)
for (const key of arr) {
    console.log(key)
}

// Перебераемый обьект это тот который можно перебрать через For of
// Массивы, строки, типизированные массывы, set, map, dom-collections


// Как сделать обьект итерируемым
const salaries = {
    john: 500,
    nik: 345,
    anna: 5000,
    seyHello: () => {
        console.log('hello')
    }
}

salaries[Symbol.iterator] = function() { // создать символ
    return { // вернуть обьект
        current: this.john,
        last: this.anna,
        next() { // в которов есть метод next
            if (this.current < this.last) {
                this.current = this.current + 500
                return {done: false, value: this.current} // вернуть обьект такого вида
            } else {
                return {done: true}
            }
        }
    }
}

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next())

// Готов к итерации
for (let res of salaries) {
    console.log(res)
}