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

//Задача. Создать конструктор объекта Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это. Используя данный конструктор можно создавать конкретный экземпляр тестирования программного продукта.


// Option 1
// class Testing{
//     p1;
//     p2;
//     p3;
//     p4;
//     p5;
//     p6;
//     p7;
//     t1;
//     t2;
//     t3;
//     t4;
//     constructor(){
//         this.p1 = "principle1";
//         this.p2 = "principle2"
//         this.p3 = "principle3"
//         this.p4 = "principle4"
//         this.p5 = "principle5"
//         this.p6 = "principle6"
//         this.p7 = "principle7"
//         this.t1 = [this.p1,this.p2,this.p3]
//         this.t2 = [this.p4,this.p6]
//         this.t3 = [this.p5]
//         this.t4 = [this.p7]
//     };
// }
// ts = new Testing()
// console.log(ts);
// Option 2
// class Testing{
//     p1;
//     p2;
//     p3;
//     p4;
//     p5;
//     p6;
//     p7;
//     t1;
//     t2;
//     t3;
//     t4;
//     constructor(){
//         this.p1 = "principle1";
//         this.p2 = "principle2"
//         this.p3 = "principle3"
//         this.p4 = "principle4"
//         this.p5 = "principle5"
//         this.p6 = "principle6"
//         this.p7 = "principle7"
//         this.t1 = 'type1'
//         this.t2 = 'type2'
//         this.t3 = 'type3'
//         this.t4 = 'type4'
//     };
//     testing(t){
//         switch (t){
//             case this.t1:
//                 return [this.p1,this.p2,this.p3];
//             case this.t2:
//                 return [this.p4,this.p6];
//             case this.t3:
//                 return [this.p5];
//             case this.t4:
//                 return [this.p7]
//         }
//     }
// }
// myTestingTypes = new Testing();
// console.log(myTestingTypes.testing('type2'));