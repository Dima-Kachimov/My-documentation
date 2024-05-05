// Вычеслить возведение в степень
function powRec(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * powRec(x, n - 1);
    }
}

powRec(2, 2); // 4
powRec(2, 3); // 8
powRec(2, 4); // 8
console.log(powRec(2, 5)); // 32