// ПОлучить главные теги страницы
const body = document.body;
const head = document.head;
const html = document.documentElement;



body.childNodes; // - Получить дочерние узлы елемнта
body.childElementCount; // - ПОлучить количество вскех дочерних елементов



// data - атрибут. Пример: <li data-current="3">3</li>
document.querySelector('[data-current="3"]'); // - получение дата атрибута



// Методы получения узлов
body.firstChild; // - получить первый узел
body.lastChild; // - получить последный узел
body.parentNode; // - Получить родительский узел
body.nextSibling; // - Получить следующий соседний узел
body.previousSibling; // - Получить предидущий соседний узел



// Методы получения елементов
body.nextElementSibling; // - получить следующий елемент
body.previousElementSibling; // - получить предыдущий елемент
body.parentElement; // - Получить родительский елемент
body.firstElementChild; // - Получить дочерний первый елемент
body.lastElementChild; // - Получить последний дочерний елемент



// Код для получения всех дочерних елементов. Например: body
for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') continue;
    console.log(node);
}
