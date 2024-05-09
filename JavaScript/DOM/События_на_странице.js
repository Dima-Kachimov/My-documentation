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
// e.target - получить елемент
// e.target.value - получить значение (например - инпута)
// e.target.checked - проверить состояние инпута с типом checkbox
// e.touches - получить обьект TouchList с дфнными
// e.targetTouches - получить данные только по том елементу где был клик
// e.changedTouch - последний убранный палец




// СПИСОК СОБЫТИЙ
/*
 * 'click' - Когда пользователь коикнул на элемент
 * 'mouseenter' - Когда пользователь навел мишкой на элемент
 * 'load' - когда ресурс полностью загрузился
 * 'DOMContentLoaded' - Собитие когда вся структура DOM дерева загружена
 * 'submit' - Собитие отправки формы
 *

 * Мобильные собития
 * touchstart - когда палец торкнулся екрана
 * touchmove - когда палец при косании елемента начинает двигаться
 * touchend - когда пользователь отпустил касание елемента
 * touchenter - когда ведем по икрану на залазим на выбранный елемент
 * touchleave - когда палец вышел за зону елемента
 * touchcancel - точка прикосновения уже больше не орентируеться на поверхности
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



// ДЕЛЕГИРОВАНИЕ СОБИТИЙ
// 1 - Нужно повесить оброботчик собития на родителя
// 2 - Вызываем callback функцию по условию
// - e.target && e.target.tagName === 'BUTTON' - по тегу
// - e.target && e.target.classList.contains('black') - по классу
// - e.target && e.target.matches('button.black') - по селектору

const wrapperBtn = document.querySelector('.wrapper-btn');
wrapperBtn.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'BUTTON') {
        console.log('button');
    }
    if (e.target && e.target.classList.contains('black')) {
        console.log('black');
    }
    if (e.target && e.target.matches('button.black')) {
        console.log('black');
    }
});
