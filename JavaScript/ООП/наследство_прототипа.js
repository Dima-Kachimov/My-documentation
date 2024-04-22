// Прототип solder
const solder = {
    health: 400,
    armor: 100,
    seyHello: function () {
        console.log('hello');
    },
};

// 1) Новый способ создание обьекта с наследством прототипа
const john = Object.create(solder); // Обьект john наследуеться от solder

// 2) Установка прототипа (1 екземпляр 2 прототип)
Object.setPrototypeOf(john, solder);

// 3) Страрый метод установки прототипа
// Екземпляр
const nick = {
    health: 100,
};
nick.__proto__ = solder;


