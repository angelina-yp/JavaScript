
// 1)Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}

function calculate(a, b, op){
   if (op == '+') {
    return a+b;
   } else if (op == '-') {
    return  a-b;
   } else if (op == '*') {
    return a*b;
    } else {
        return a/b ;
    }
}
console.log(calculate(2, 3, '/'))
// 2)Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.
function greet(name) {
    const greeting = `Привет, ${name}! Добро пожаловать! 🎉`;
    console.log(greeting);
}
greet('Анжелина');
//3)Напишите функцию generateIntegers/generate_integers, которая принимает единственный аргумент n/$n и генерирует массив, содержащий целые числа от 0 до n/$n включительно.
//Например, generateIntegers(3)/generate_integers(3) должен возвращать [0, 1, 2, 3].

function generateIntegers(n) {
    const arr = []; // Определяем массив для хранения целых чисел
    for (let i = 0; i <= n; i++) { // Используем <=, чтобы включить n
        arr.push(i); // Добавляем текущее значение i в массив
    }
    return arr; // Возвращаем массив
}
//4)Создайте функцию, которая может получать все целые числа между двумя заданными числами.

function range(startNum, endNum)   {  
    arr = [];
    for (let i = startNum + 1; i < endNum; i++) {
      arr.push(i)
    }
     return arr 
    }; 