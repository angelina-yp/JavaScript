/*1)Определите класс Shape. 
Он имеет три свойства: name, sides, и sideLength. 
Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, например квадрат или равносторонний треугольник.
2)Добавьте конструктор в этот класс. 
Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
3)Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр (длину внешнего края фигуры) и записывает результат в консоль.
4)Создайте новый экземпляр класса Shape с именем square. 
Дайте name ему square, sides = 4 и sideLength = 5​
5)Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, записывает ли он результаты вычислений в консоль браузера, как ожидалось.
Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
7)Вызовите  triangle.calcPerimeter(), чтобы убедиться, что все работает.
*/
class shape {
    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength  = sideLength;

    }

    calcPerimetr(){
        console.log(`The ${this.name} perimetr length is 
        ${this.sides} * ${this.sideLength} = ${this.sides * this.sideLength}`);
    }
}

let square = new shape ("square",4,5);
square.calcPerimetr();

let triangle = new shape("triangle",3,3);
triangle.calcPerimetr()

/*2)Задача.
-создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата. 
-Также настройте конструктор так, чтобы name свойству Square экземпляров объекта автоматически присваивалось значение square, а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
-Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.
*/
class Square extends shape{
    constructor(sideLength){
        super("square",4,sideLength)
        
    }

    calcArea(){
        console.log(`The ${this.name} area is 
        ${this.sideLength} * ${this.sideLength} = ${this.sideLength* this.sideLength}`);

    } 
}
let Square2 = new Square(3);
Square2.calcArea()

class Person {
 
    constructor(name,age) {
    this.name=name;
      this.age=age;
    }
    getInfo(){
   return`${this.name}'s age is ${this.age}`;
  }
  }
  let get = new Person('john', 34);
  console.log(get.getInfo());

  /*3)Задача  Предустановленный код для вас - это class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
Затем вам будет предоставлен рабочий код class Labrador в качестве начального кода.

class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
Сократите его, чтобы оно соответствовало строгим требованиям к количеству символов для этого ката.*/
class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name, age, gender, "Labrador", "Large", master, true);
    }
  }

  /*4)Задача. Ваша задача - завершить этот класс, класс Person создан. Вы должны заполнить метод конструктора, чтобы принять имя в виде строки и возраст в виде числа, заполнить свойство get Info и метод getInfo / средство получения информации, которое должно возвращать johns age is 34*/
  export class Person {
 
    constructor(name,age) {
    this.name=name;
      this.age=age;
    }
    getInfo(){
   return`${this.name}s age is ${this.age}`;
  }
  }
  let get = new Person('john', 34);
  console.log(get.getInfo());

  /*5)Задача*/
  class Person {
    // Get coding in ES6 :D
    constructor(firstName,lastName,age) {
    this.firstName=firstName;
      firstName="John";
      this.lastName=lastName;
      firstName="Doe";
      this.age=age;
      age=0;
      this.gender=gender;
      gender="Male";
    }
    sayFullName(){
   return`${this.firstName} ${this.lastName}`;
  }
  }
  let get = new Person('john', 34);
  console.log(get.sayFullName());

  /*5)Задача Определите a class Person со следующими свойствами:

constructor Который принимает 4 аргумента: firstName/FirstName (значение по умолчанию "John", если не установлено), lastName/LastName (значение по умолчанию "Doe", если не установлено), age/Age (значение по умолчанию 0, если не установлено) и gender/Gender (значение по умолчанию "Male", если не установлено). Они должны храниться в this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age и this.gender/this.Gender соответственно.
Метод sayFullName/SayFullName, который не принимает аргументов и возвращает полное имя (например, "John Doe")
Класс / статический метод greetExtraTerrestrials/GreetExtraTerrestrials, который принимает один параметр raceName и возвращает "Welcome to Planet Earth raceName". Например, если название расы "Марсиане", оно должно гласить "Welcome to Planet Earth Martians"*/
class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    sayFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`;
    }
  }
  //6)Задача. Ваша задача - завершить этот класс, класс Person создан. Вы должны заполнить метод конструктора, чтобы принять имя в виде строки и возраст в виде числа, заполнить свойство get Info и метод getInfo / средство получения информации, которое должно возвращать johns age is 34
  class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    get info() {
      return `${this.name}s age is ${this.age}`;
    }
    
  }