function factorial(n) {
    // Проверяем на целое число
    if (typeof n === 'string' || !Number.isInteger(n)) {
        return 'Error';
    }
    // Проверяем на 0 или меньше 0 ==> 1
    if (n === 1 || n === 0 || n < 0) {
        return 1;
    } else {
        // Вычисления факториала
        let factorial = n;
        for (let i = 1; i < n; i++) {
            // Формула факториала n! * (n - 1)
            factorial *= (n - i);
        }
        return factorial;
    }
}
console.log(factorial(4)) // 24


//Решение с помощью рекурсии
function factorialRecursion(n) {
    if (typeof n === 'string' || !Number.isInteger(n)) {
        return 'Error';
    }
    if (n === 1 || n === 0 || n < 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(4)) // 24