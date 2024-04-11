// *** Циклы ***

// 1) while () {}
let num = 50;
while (num !== 0) {
    console.log(num)
    num--
}

// 2) do {} while ()
let number = 50;
do {
    console.log(number)
    number--
} while (number >= 45)

// 3) for () {}
for (let i = 0; i <= 10; i++) {
    if (i === 6) break; // полностью выходит из цыкла
    if (i === 2) continue; // пропускает текущую итерацию
    console.log(i)
}

// Цыкл в цыкле + Задача
for (let i = 0; i < 3; i++) {
    console.log('i')
    for (let j = 0; j < 3; j++) {
        console.log('j')
    }
}

// задача
// *
// **
// ***
// ****
// *****
// ******

// Решение
let result = ''
const length = 6
for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*'
    }
    result += '\n'
}

// Тройной цыкл + метка
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`)
        for (let k = 0; k < 3; k++) {
            if(k === 2) continue first
            console.log(`Third level: ${k}`)
        }
    }
}