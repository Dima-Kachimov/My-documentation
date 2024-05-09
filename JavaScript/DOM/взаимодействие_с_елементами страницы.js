// Получаем елементы для взаимодействия с ними
const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');


// Изменение стилей елементов Инлайн
// - Через свойство .style = ''
box.style.backgroundColor = 'green';
box.style.width = '600px';
buttons[1].style.border = '3px solid red';

// - Через свойство .style.cssText = ''
circles[0].style.cssText = 'background-color: red; border: 2px dashed blue';



// Работа с классами
box.classList.length // - свойство паказывает сколько классов есть у данного обьекта
box.classList.item(0) // - Получить клас под определенным индексом
div.classList.add('black', 'test'); //- Добавить класс
div.classList.remove('black') // - Удалить класс
div.classList.toggle('black') // - Переключить класс (если нет то добавить если есть то удалить)
box.classList.contains('black') // - Если класс есть ==> true если класса нет ==> false
box.className // - Получить строку со всеми классами



// Основные методы елементов
const div = document.createElement('div'); // - Создание элемента
wrapper.append(div); // - Вставить ноду в конец тега c классом wrapper
wrapper.prepend(div); // - Вставить ноду в начало тега c классом wrapper
hearts[1].before(div); // - Вставить ноду перед елементом hearts[1]
hearts[1].after(div); // - Вставить ноду после елемента hearts[1]
circles[0].remove(); // - Удалить ноду на странице
circles[1].replaceWith(div); // - Заменить елемент на другой



// Старие методы
wrapper.appendChild(div); // - Вставить ноду в конец тега c классом wrapper
wrapper.insertBefore(div, hearts[0]); // - Вставить ноду в елементе wrapper перед елементом hearts[0]
wrapper.removeChild(hearts[0]); // - Удалить hearts[0] в елементк wrapper
wrapper.replaceChild(div, hearts[0]); // - Заменить hearts[0] на div в wrapper


// Добавить текст в елемент отресовать HTML
div.innerHTML = '<h1>Hello</h1>'; // - Можно добавить код HTML разметки
box.textContent = 'hello'; // - Работает только с текстом



// Комбинация innerHTML и методоми добавления елементов
/*
* 'beforebegin' - Перед элементом.
* 'afterbegin' - Прямо внутри элемента, перед его первым дочерним элементом.
* 'beforeend' - Внутри элемента, после его последнего дочернего элемента.
* 'afterend' - После элемента.
 */
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');



// Перебор колекции элементов и измененеие стилей
// 1) Цикл for
for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'blue';
}
// 2) метод forEach() - есть только если получить елементы через querySelectorAll()
hearts.forEach((item) => (item.style.width = '300px'));