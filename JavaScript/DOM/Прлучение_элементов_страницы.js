'use strict';

// СТАРЫЕ МЕТОДЫ ПОЛУЧЕНИЯ ЭЛЕМЕНТОВ СО СТРАНИЦЫ

// Список
/*
 * document.getElementById()
 * document.getElementsByTagName()
 * document.getElementsByClassName()
 */

// Получение элемента по его ID
const box = document.getElementById('box');
// Получение элемнта или элементов по тегу в одну коллекцию (Псевдомассив HTMLCollection)
const buttons = document.getElementsByTagName('button');
// Получение элемнта или элементов по классу в одну коллекцию (Псевдомассив HTMLCollection)
const circles = document.getElementsByClassName('circle');





// НОВЫЕ МЕТОДЫ ПОЛУЧЕНИЯ ЕЛЕМЕНТОВ СО СТРАНИЦЫ

// Список
/*
 * document.querySelectorAll()
 * document.querySelector()
 */

// Получение всех елементом с классом '.heart' в псевдомассив NodeList c методом forEach()
const hearts = document.querySelectorAll('.heart');
// Получение первого элемента по классу
const oneHeart = document.querySelector('.heart');
// Получение елемента по ID
const boxTwo = document.querySelector('#box');