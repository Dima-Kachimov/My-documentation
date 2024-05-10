'use strict'
// Ревлезация табов на чистом JS

// Вешаем событие DOMContentLoaded на window для того чтобы DOM дерево полностью отресовалось
window.addEventListener('DOMContentLoaded', () => {

    // 1)  Находим все елементы с которыми будем работать
    const tabs = document.querySelectorAll('.tabheader__item') // - Все кнопки с табами (псевдо массив)
    const tabsParent = document.querySelector('.tabheader__items'); // - Родительский елемент всех табов
    const tabsContent = document.querySelectorAll('.tabcontent') // - Содержимое табов (псевдо массив)

    // 2)  Для начала пишем функцию которая будет скрывать весь кониент всех табов
    function hideTabContent() {
        // Обходим массив с контентом табов и скрываем их
        tabsContent.forEach(item => {
            item.classList.remove('show', 'fade')
            item.classList.add('hide')
        })
        // Обходим массив с кнопками табов и удаляем у них активный класс
        tabs.forEach(item => item.classList.remove('tabheader__item_active'))
    }

    // 3) Пишем функцию которая будет показывать контент определенного таба
    function showTabContent(i = 0) {

        // показываем нужный контент по его индексу
        tabsContent[i].classList.remove('hide')
        tabsContent[i].classList.add('show' , 'fade')
        // Вешаем активный класс на кнопку
        tabs[i].classList.add('tabheader__item_active')
    }

    // 4) вешаем один оброботчик событий на родителя
    tabsParent.addEventListener('click', (e) => {
        const target = e.target

        // Пишем условие что мы кликнули елемент с классом tabheader__item
        if(target && target.classList.contains('tabheader__item')) {

            // После этого перебераем псевдо массив со всеми табами
            tabs.forEach((item, index) => {

                // Проверям на условие что перебираемий таб равен тому на который мы кликнули
                if(item === target) {

                    // Очищаем контент и табы
                    hideTabContent()
                    // Запускаем нужный таб по его индексу
                    showTabContent(index)
                }
            })
        }
    })

    // Показ первого таба на странице
    hideTabContent()
    showTabContent()
});