//Homework 08. Course JavaScript.
 /*Задача.
Создайте класс Person и его подкласс Teacher на примере функций Person и  Teacher*/
 /*
function Person(first, last, age, gender, interests) {
  this.name = {
    	first,
    	last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

//Все методы определены в прототипе конструктора. Например:

Person.prototype.greeting = function () {
  console.log("Hi! I'm " + this.name.first + ".");
};

/*Мы хотели создать класс Teacher,  который наследует всех членов от Person, но также включает в себя:
Новое свойство, subject - оно будет содержать предмет, который преподаёт учитель.
Обновлённый метод greeting(), который звучит немного более формально, чем стандартный метод greeting() — более подходит для учителя, обращающегося к некоторым ученикам в школе.
Определение функции-конструктора Teacher()
Первое, что нам нужно сделать, это создать конструктор Teacher() - добавьте ниже следующий код:*/
/*function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

//В качестве примечания мы могли бы просто сделать это:

function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}

Teacher.prototype.greeting = function () {
   let prefix = "";
  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }
 console.log(   "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      ".");
}

//Но это просто переопределяет свойства заново, а не наследует их от Person(), так что теряется смысл того, что мы пытаемся сделать. Он также занимает больше строк кода.
/*Задача.
Создайте классы пользователей и администраторов : User and Admin classes.

     В этом задании мы будем использовать частные свойства, чтобы скрыть определенные значения и предотвратить прямой доступ к ним. Доступ к частным свойствам возможен только из объявления класса.

Мы обозначаем частную переменную или функцию символом решетки (#).

     Например, если бы у нас был класс Person с номером социального страхования и функцией для расчета налоговой категории, мы бы не обязательно хотели, чтобы эта информация была общедоступной. 
*/
class Person {
  constructor (first, last, age, gender, interests)
{
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

}
greeting(){

  console.log("Hi! I'm " + this.name.first + ".");
}

}

class Teacher extends Person {
   constructor(first, last, age, gender, interests, subject) {
   super(first, last, age, gender, interests);
   this.subject = subject;
   }
   greeting(){

    let prefix = "";
  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
     }

     console.log(   "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      ".");
}

}








let person1 = new Person('Tammi','Smith',17,'female',['music','skiing', 'kickboxing']);

person1.greeting()


   








