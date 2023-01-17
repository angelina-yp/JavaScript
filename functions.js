//1. написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степения 1.
//let a = 2;
//let b = 10;
//let result = 1;
//let i = 1;
//while (i <= b){
 // result = result * a;
 // console.log(result)
 // i++;
//}

//1-2
let a = 2;
let b = 10;
let result = 1;

for (let i = 1; i <= b; i++){
  result = result * a;
  console.log(result)
 
}

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function power(a, b){
    let result = 1;
    for(let i = 0; i <b; i++)
    {
        result = result * a;
    }
    return(result);
}
console.log(power(2,10));

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let string = "", i = 1;
while (i <=5) {
string += ":)";
console.log(string);
i++;
}

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

const printSmile = function(stroka, numberOfRows) {
    let result = ''
    for (let i = 1; i <= numberOfRows; i++) {
        result += stroka
        console.log(result)
    }
}
printSmile(':)', 5)


//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.e.g. function getWordStructure(word) В консоли:Слово (word) состоит из  (число) гласных и (число) согласных букв
//Проверки: 'case', 'Case', 'Check-list'

function getWordStructure2(word) {
    const vowels = 'aeiouy'.split('')
    const consontants = 'bcdfghjklmnpqrstvwxz'.split('')
    let numberOfVowels = 0
    let numberOfConsontants = 0
    for (char of word.toLowerCase()) {
        if (vowels.includes(char)) numberOfVowels++
        if (consontants.includes(char)) numberOfConsontants++
    }
    console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsontants} согласных букв`)
}


//4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word) Проверки: 'abba', 'Abba'

function isPalindrom3(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}
console.log(`${isPalindrom3('Abba') ? 'It is a palindrome' : 'It is not a palindrome'}`)
