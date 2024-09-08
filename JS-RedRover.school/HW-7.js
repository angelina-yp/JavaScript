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