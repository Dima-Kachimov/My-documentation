// 1) Правило - если на обьект есть хотябы одна ссылка то он будет находиться в памяти


// 2) Если нет 'use strict' и обявить переменную без ключевого слова то она будет ссылаться на обект window и не будет удвлена
function func() {
    str = 'string' // тоже самое что window.str = 'string' такая переменная не может быть удалена из области памяти
}


// 3) НЕ забывать отключать таймеры и интервалы
const someRes = getData()
const node = document.querySelector('.class')  // Даже если удалить node то ссылка останиться в таймере

setInterval(() => {
    if(node) {
        node.innerHTML = someRes
    }
}, 1000)

// 4) Новые браузеры научились удалять оброботчики собитий если елемент со страницы был удален (для очистки памяти)

// 5) Утечка памяти через замыкание
const myFn = () => {
    const arr = [] // Замкнутая переменная (Утечка памяти)
    return function inner() {
        inner.push('hello') // ссылка на переменную
        console.log('Hello!!')
    }
}
const sayHello = myFn() // нужно быть окураттным


// 6) Сыылки на DOM елементы тоже могут быть утечкой памяти
function createEL() {
    const div = document.createElement('div')
    div.id = 'test'
    document.body.append(div)
    // Утечка памяти
    // return div
}

createEL()
// Утечка памяти
// const testDiv = createEL()
// document.body.append(testDiv)

function deleteEl() {
    document.body.removeChild(document.getElementById('test'))
}
deleteEl()