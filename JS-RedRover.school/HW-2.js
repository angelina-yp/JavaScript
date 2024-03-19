//1.This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
//var a == "code";
//var b == "wa.rs";
//var name == a + b;
var a = "code";
var b = "wa.rs";
var name = a + b;
console.log(name);

//2.В JavaScript существует особый случай, когда строгое сравнение одной и той же переменной возвращает false! Попробуйте узнать, что нужно сделать, чтобы получить такой результат!


 function findStrangeValue() {
    return 0 / 0; // NaN
}

var x = findStrangeValue();
console.log(x === x);


//3.	Установить какие методы строк изменяют начальное значение строки.
//Дано: Строка: “Knowledge of built-in JavaScript methods speeds up a tester's work.”
//Методы:
//s.charAt(); или s[0]
//s.charAt(s.length - 1);
//извлечение подстроки:
//s.substring(1, 4); 
//s.substr(1, 3); 
//s.slice(1, 4); 
//s.slice(-3);
//s.indexOf(‘l’); 
//s.lastIndexOf(‘l’); 
//s.split(‘, ’);
//s.replace(“l”, “L”); 
//s.replaceAll(“l”, “L”); 
//s.toUpperCase;
//s.toLowerCase(); 
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".charAt()); //Возвращает символ по указанному индексу.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".charAt("Knowledge of built-in JavaScript methods speeds up a tester's work.".length - 1));
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".substring(1, 4)); //Извлекает символы из строки между двумя указанными индексами. Второй индекс указывать не обязательно. В таком случае будут извлечены все символы от начала до конца строки. В отличие от slice, можно задавать start больше, чем end. Отрицательные значения не поддерживаются, они интерпретируются как 0.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".substr(1, 3)); //Извлекает часть строки указанной длины. Первым параметром принимает стартовую позицию, вторым — длину. Значение первого параметра может быть отрицательным, тогда позиция определяется с конца строки.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".slice(1, 4)); //Извлекает часть строки и возвращает новую строку. Обязательный параметр — начало извлечения. Вторым параметром можно установить границу (по умолчанию — до конца строки).
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".indexOf('l')); //Возвращает индекс первого найденного вхождения указанного значения. Поиск ведётся от начала до конца строки. Если совпадений нет, возвращает -1. Вторым параметром можно передать позицию, с которой следует начать поиск.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".lastIndexOf('l')); //Возвращает индекс последнего найденного вхождения указанного значения. Поиск ведётся от конца к началу строки. Если совпадений нет, возвращает -1. Вторым параметром можно передать позицию, с которой следует начать поиск.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".split('',10 )); //Разбивает строку в массив по указанному разделителю, которым может быть подстрока или регулярное выражение. Вторым параметром можно указать ограничитель.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".replace('l', 'L')); //Ищет в строке указанное значение или регулярное выражение и возвращает новую строку, в которой выполнена замена на второй параметр. Можно заменить найденные значения другой строкой или передать функцию для работы над совпадениями.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".replaceAll('l','L')); //Даёт такой же результат, как метод replace() с глобальным флагом g. Заменяет все найденные совпадения другой строкой или переданной функцией.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".toLowerCase()); //Преобразует символы в строке в нижний регистр.
console.log("Knowledge of built-in JavaScript methods speeds up a tester's work.".toUpperCase()); //Преобразует символы в строке в верхний регистр.
//4.Нарисовать елочку
console.log('   /\\');
console.log('  /  \\');
console.log(' /    \\');
console.log('/______\\');
console.log('   ||');
/*//5)Всем известно определение тестирования / testing. Но у нас все слова в определении перемешались с определением цель тестирования (цель проведения тестирования) /. Исправьте текст в соответствии с глосарием ISTQB:
//testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products. test objective (The purpose for testing)
//(тестирование – Процесс в рамках жизненного цикла разработки программного обеспечения, который оценивает качество компонента или системы, а также связанных с ними рабочих продуктов.)
// wrongEnglishText = “testing – The process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products.”
// wrongRussianText = “тестирование – Процесс в рамках жизненного цель цикла тестирования разработки программного цель обеспечения, проведения который оценивает качество компонента или системы, а также связанных с ними тестирования рабочих продуктов.”
// Используйте переменные, методы для строковых типов данных.
 // Исходный текст
let wrongEnglishText = "testing – The process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products.";
let wrongRussianText = "тестирование – Процесс в рамках жизненного цель цикла тестирования разработки программного цель обеспечения, проведения который оценивает качество компонента или системы, а также связанных с ними тестирования рабочих продуктов.";
let rightText = "testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products."
let wrongWords = " test objective The purpose for testing";
//wrongEnglishText = rightText;
if (wrongEnglishText === rightText) {
    console.log (true);
} else {
    console.log (false);
}

console.log(wrongEnglishText);
console.log(rightText);*/