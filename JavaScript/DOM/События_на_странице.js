// События на странице

// НАХОДИМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ ДЛЯ ВЗАИМОДЕЙСТВИЯ С НИМИ
const box = document.getElementById('box');
const heart = document.querySelector('.heart');
const button = document.querySelector('button');

// Собитие - это сигнал браузера о том что случилось на странице
// Собитие - выполняеться в порядке очереди



// Мнтоды обьекта event
// e.preventDefault() - сбрасивает стандартное поведение браузера
// e.stopPropagation() - отменяет всплитие собития родителю



// СПИСОК СОБЫТИЙ
/*
 * 'click' - Когда пользователь коикнул на элемент
 * 'mouseenter' - Когда пользователь навел мишкой на элемент
 */

// ПРОСЛУШКА СОБЫТИЙ 3 СПОСОБА

// 1) Первый способ прослушать собитие (Не используеться из за переприсваивания)
box.onclick = (e) => {
    console.log(e);
};

// 2) второй способ (Не использовать)
// <button onClick="alert('hello')">1</button>

// 3) Способ (Использовать нужно его)
button.addEventListener('mouseenter', (e) => {
    console.log(e);
});


// УДАЛЕНИЕ ОБРОБОТЧИКА СОБИТИЙ

// 1) callback функцию нужно вынести за пределы оброботчика
const openEvent = (e) => {
    console.log(e);
};

heart.addEventListener('mouseenter', openEvent, { once: true });
// 2) Выполняем удаление оброботчика через removeEventListener
heart.removeEventListener('mouseenter', openEvent);

// addEventListener - принимает три аргумента
// 1 - название собития
// 2 - callback функцию которая выполниться
// 3 - Опции - настройки (Опционально)