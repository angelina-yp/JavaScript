
//         01234567891011
// console.log(str.length);
// < str.length 
// <= str.length - 1
// for (let i=0; i < str.length; i++) {
// console.log(str[i]); // текущий элемент строки
// console.log(i);         // текущий индекс элемента
// }
// console.log(str.indexOf('W'));        // метод
/*
   for (let k=0; k < str.length; k++ ) { // цикл
     if (str[k] === "W") {
     console.log(k);
     }
   }

   for (let m=0; m < str.length; m++ ) { // цикл
     if (m % 2 === 0) {                           // если остаток от деления индекса на 2 равен 0, то есть индекс чётный,
     console.log('Чётный элемент: ' + str[m]);     // то выводим элемент строки, с указанным индексом
     } else {
     console.log('Нечётный элемент: ' + str[m]); 
     }
   }
*/
let arrayNumber = [1, 2, 3, 10, 20, 100];   // чётные элементы - 2, 10, 20, 100
        //         0  1  2   3   4    5        чётные индексы - 0, 2, 4
/*
let sum = 0;
let mult = 1;
for (let x=0; x < arrayNumber.length; x++) {
//    console.log(arrayNumber[x]);
      sum += arrayNumber[x];        // сумма элементов массива
      mult *= arrayNumber[x];       // произведение элементов массива
}
console.log(sum);
console.log(mult);

let sum1 = 0;
for (let y=0; y < arrayNumber.length; y++) {
 if (y % 2 === 0) {                             // если индекс элемента чётный, то cуммируем
 sum1 += arrayNumber[y];                      
 }   
}
console.log(sum1);

let sumEvenElements = 0;
for (let y=0; y < arrayNumber.length; y++) {
 if (arrayNumber[y] % 2 === 0) {                 // если текущий элемент массива чётный, то складываем
 sumEvenElements += arrayNumber[y];      
 }   
}
console.log(sumEvenElements);
*/
// НЕ ПУТАТЬ индексы с элементами массива!

// Задача.  Просуммировать элементы массива, находящиеся по нечётному индексу.

let arrayNumber1 = [1, 2, 3, 4, 5, 6, 7];    // Это элементы массива
//                  0  1  2  3  4  5  6      // Это индексы массива
let sumNumber = 0;                           // Сюда записываем результат суммы элементов массива
/*
for (let el=0; el < arrayNumber1.length; el++) {  // el - Это индекс элемента в массиве
  if (el % 2 === 1) {                             // Если индекс нечётный, то значение элемента массива складываем 
    sumNumber = sumNumber + arrayNumber1[el];     // 0 - чётное число
    console.log(sumNumber); 
  }
}

// console.log(sumNumber);                           //0 - 0 - 2 - 2 - 6 - 6 - 12 - 12
// Чётные числа el % 2 == 0                     - остаток от деления равен 0
// Нечётные числа el % 2 !== 0, el % 2 === 1    - остаток от деления НЕ равен 0 или равен 1
for (let i in arrayNumber1) {                 // вывод индексов массива
if (i % 2 === 1) {                             // Если индекс нечётный, то значение элемента массива складываем 
    sumNumber = sumNumber + arrayNumber1[i];     // 0 - чётное число
//    console.log(sumNumber); 
    console.log('Индекс массива ' + i + ' Сумма элементов ' + sumNumber); 
}
}

for (let el of arrayNumber1){                      // Элементы массива
    sumNumber = sumNumber + el;                    // Сумма элементов массива, не обращаясь к индексам
//    console.log(el);
    console.log(sumNumber);
}
*/
// let str = ["Hello", "World!"];
//               0        1                          // индексы
var str = 'Hello World! You are welcome'.split(" "); // разделить строку по пробелу и записать в массив, 
                                                     // где каждый элемент - строка
// console.log(str);
for (let i=0; i < str.length; i++){               // i - это индекс слова
//  console.log(str[i]);                          // текущий элемент строки - слово
  for (let j=0; j < str[i].length; j++) {         // j - это индекс буквы слова
  if (str[i][j] === 'W') {                        // i,j - это буква j для слова i
    console.log(str[i]);
//  console.log(str[i][j]);                         // выводим букву каждого слова
  }
  }
}
     