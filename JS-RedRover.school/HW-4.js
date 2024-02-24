/* 1)Задача.
Создать функцию  getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

console . log ( "Hello world ! " ) ; 
console . log("! Hola mundo ! " ); 
console . log ( "Hallo wereld ! " ) ; 
console . log ( "Пpивeт мир!" ) ;
Создать декларируемую функцию (function Declaration) и функцию выражение (function Expression).*/

// Декларируемая функция
function getGreetingsDeclaration() {
    return ["Hello, World", "¡Hola mundo!", "Hallo wereld!", "Привет мир!"];
} 
console.log(getGreetingsDeclaration());

// Функция выражения
var getGreetingsExpression = function() {
    return ["Hello, World", "¡Hola mundo!", "Hallo wereld!", "Привет мир!"];
}; 
console.log(getGreetingsExpression());
/*2)Напишите функцию, которая принимает название типа тестирования, и возвращает определение этого типа тестирования с соответствии с Силлабусом 4.0. International Software Testing Qualifications Board.  
*/
