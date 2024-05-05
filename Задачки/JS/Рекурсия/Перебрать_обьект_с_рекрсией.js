
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

function getTotalProgressBy(data) {
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
const result = getTotalProgressBy(students);
console.log(result[0] / result[1]);