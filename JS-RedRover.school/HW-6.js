/*Задача.
Создание простого конструктора: Создайте конструктор Person, который принимает параметры name и age, и создает объекты, представляющие людей. Каждый объект должен иметь метод greet, который выводит приветствие с именем и возрастом этого человека.
Изучение прототипов: Расширьте предыдущий пример, добавив метод celebrateBirthday в прототип Person, который увеличивает возраст человека на единицу.
*/


function Person(name, age) {
    this.name = name;
    this.age = age;

    this.celebrateBirthday = function() {
        this.age++;
        return `Happy Birthday, ${this.name}! You are now ${this.age} years old.`;
    };

    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
}

let anzhelina = new Person("Anzhelina", 32);

console.log(anzhelina.greet());
console.log(anzhelina.celebrateBirthday());
/*Задача. Создать конструктор объекта Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это. Используя данный конструктор можно создавать конкретный экземпляр тестирования программного продукта.
*/






  Person.prototype.celebrateBirthday = function() {
    this.age++;
    console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
};

