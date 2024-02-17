//1)Установить какие методы массива изменяют начальное значение массива.
//Дано: Массив homeArray = [17, “test”, true, [4, 5], ‘last’]
let homeArray = [17, "test", true, [4, 5], "last"];
let newHomeArray;
console.log(`homeArray = ${homeArray}`); //homeArray = 17,test,true,4,5,last
//newHomeArray = homeArray.pop();
console.log(`newHomeArray = ${newHomeArray}`);//newHomeArray = last
console.log(`homeArray = ${homeArray}`);//homeArray = 17,test,true,4,5
console.log(homeArray.length);//5 

console.log(homeArray.toString()); //17,test,true,4,5,last

console.log(homeArray.at()); //17

console.log(homeArray.join());//17,test,true,4,5,last

//console.log( homeArray.push(1));//5 - добавляет элементы в конец

console.log(homeArray.shift());//17 - извлекает элемент из начала

//console.log(homeArray.unshift(2));// -добавляет элементы в начало

//console.log(homeArray.delete(1,1));//
const my = ["Emil", "Tobias", "Linus"]
console.log(homeArray.concat(my));// -создаёт новый массив, в который копирует данные из других массивов

console.log(homeArray.copyWithin(2.0));//

console.log(homeArray.flat());//[ 'test', true, 4, 5, 'last' ]

console.log(homeArray.splice(1.1));//[ true, [ 4, 5 ], 'last' ]

//console.log(homeArray.toSpliced(0,1));//

console.log(homeArray.slice(1));//[ ]

//2)Из текста о принципах тестирования из Силлабуса ISTQB 4.0 составить массив и вывести в консоль в виде текста.
let text1 = "1. Testing shows the presence, not the absence of defects."
let text2 = "2. Exhaustive testing is impossible."
let text3 = "3. Early testing saves time and money."
let text4 = "4. Defects cluster together."
let text5 = "5. Tests wear out."
let text6 = "6. Testing is context dependent."
let text7 = "7. Absence-of-defects fallacy.";
let array = [text1, text2, text3, text4, text5, text6, text7];
console.log(array);