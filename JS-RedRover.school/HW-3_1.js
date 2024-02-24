
 //Задача 1. Напишите последовательность команд, в результате которых
 //переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль. Используйте 2 способа
/* let x = 10;
let y = 20;

let temp = x;
x = y;
y = temp;

console.log("Способ 1:");
console.log("x =", x); // Вывод: x = 20
console.log("y =", y); // Вывод: y = 10*/
let x = 10;
let y = 20;

x = x + y;
y = x - y;
x = x - y;

console.log("Способ 2:");
console.log("x =", x); // Вывод: x = 20
console.log("y =", y); // Вывод: y = 10


 /*Задача 2 Create variables for the names with age: Tom, Sam, Jack, Ted.
  Tom is 16, each friend is 2 years older, starting from Tom in order.
 
  a)Count the age of each person;
 
 b) Insert the names with the age to the string, using concatenation and ${}:
 “Tom is - 16 years old, Sam is - …. years old, Jack is … years old,
  Ted is … years old. And the total of our age is ….years old”.
 
  c) Find out what is the Unicode Value of the 1sr letter of the name,
 and add the total to the string: “The total of the Unicode values of
  the 1st letter of the all names is ….!”.
 */
 let ageTom = 16;
 let ageSam = ageTom - 2;
 let ageJack =  ageSam -2;
 let ageTed = ageJack -2;

 console.log(`Tom is ${ageTom} years.`);
 console.log(`Sam is ${ageSam} years.`);
 console.log(`Jack is ${ageJack} years.`);
 console.log(`Ted is ${ageTed} years.`);

 // Create variables for the names with ages
let names = ["Tom", "Sam", "Jack", "Ted"];
let ages = [16];

// Calculate ages for Sam, Jack, and Ted based on Tom's age
for (let i = 1; i < names.length; i++) {
    ages[i] = ages[i - 1] + 2;
}

// Find the Unicode value of the 1st letter of each name and calculate total
let totalUnicode = 0;
names.forEach(name => {
    totalUnicode += name.charCodeAt(0); // Get Unicode value of the 1st letter
});

// Output the result
console.log(`The total of the Unicode values of the 1st letter of the all names is ${totalUnicode}!`);