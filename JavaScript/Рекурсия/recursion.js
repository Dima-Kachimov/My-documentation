/////////////////////// РЕКУРСИЯ //////////////////////
// Рекурсия - это прием когда функция вызывает саму себя в нутри себя


// Стандартный пример кода

// Итеративный подхлд
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

// Подход с рекурсией
function powRec(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * powRec(x, n - 1);
    }
}

pow(2, 2); // 4
pow(2, 3); // 8
pow(2, 4); // 8
console.log(powRec(2, 5));


// Реальный пример: Посчитать средний прогрес всех студентов в обьекте
let students = {
    js: [
        {
            name: 'jon',
            progress: 100,
        },
        {
            name: 'ivan',
            progress: 60,
        },
    ],
    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20,
            },
            {
                name: 'Ann',
                progress: 18,
            },
        ],
        pro: [
            {
                name: 'sam',
                progress: 10,
            },
        ],
    },
};

// Подход с итерацией (Зависит от структуры обьекта и не работает с глубокой вложенностью)
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            course.forEach((el) => (total += el.progress));
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;
}

// Подход с рекурсией идеально подходит для такой задачи
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        data.forEach((el) => (total += el.progress));
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}
const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);