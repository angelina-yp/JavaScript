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
function getTestingTypeDescription(testingType) {
    switch(testingType.toLowerCase()) {
        case 'функциональное тестирование':
            return 'оценивает функции, которые компонент или система должны выполнять. Функции дают ответ на вопрос «что делает система». Основная цель функционального тестирования — это проверка функциональной полноты, функциональной правильности и функционального соответствия. ';
        case 'нефункциональное тестирование':
            return 'оценивает признаки компонента или системы, отличные от функциональных характеристик. Нефункциональное тестирование – это проверка того, «насколько хорошо работает система».';
        case 'тестирование методом черного ящика':
            return 'основано на поведении и внешней по отношению к объекту тестирования документации. Основная цель тестирования методом черного ящика — это проверка соответствия поведения системы ее спецификациям.';
        case 'тестирование методом белого ящика':
            return 'основано на реализации системы или ее внутренней структуре (например, программном коде, архитектуре, принципах работы и потоках данных). Основная цель тестирования методом белого ящика - покрыть основную структуру тестами на приемлемом уровне.';
        default:
            return 'Unknown testing type. Please provide a valid testing type (unit, integration, system, acceptance).';
    }
}

// Пример использования функции
let testingType = 'нефункциональное тестирование';
let testingTypeDescription = getTestingTypeDescription(testingType);
console.log(testingTypeDescription);
