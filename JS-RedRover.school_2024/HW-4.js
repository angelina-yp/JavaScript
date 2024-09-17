// 1// let vegetables1 = [‘Капуста‘, ‘Репа‘, ‘Редиска‘, ‘Морковка’ , ‘лук‘, ‘картошка‘];
//вывести строки содержащие буквы и ‘а’ и ‘о’ слова не должны повторятся
// let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка' , 'лук', 'картошка'];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('а') && arr[i].includes('о') ) {
//     console.log(arr[i])
//     }
// }

// 2/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной
//let arr = [5,'hgdshg', 'kkkk', 'jjjj', 'ooooo']

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length %2 == 0 && i%2 == 0) {
//   console.log(arr[i])
//   }
// }

//* только первое слово
// let result = []; 

// for (let i = 0; i < arr.length; i++) {
    
//     if (typeof arr[i] === 'string' && arr[i].length % 2 === 0 && i % 2 === 0) {
//         result.push(arr[i]); 
//     }
// }

// console.log(result);

// 3/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной в обратном порядке

// let arr = ['hgdshg', 'kkkk', 'jjjj', 'ooooo'];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length % 2 === 0 && i % 2 === 0) {
//         result.push(arr[i].split('').reverse().join('')); // добавляем перевернутую строку
//     }
// }

// console.log(result.reverse()); 
//* только первое слово
//a = result.reverse()
//console.log(a[0]);
//4// let numbers = [ 3, 5, 25, 70,  171,200,326, 345, 999, 1000, 1005]
// найти сумму всех чисел
// let numbers = [ 3, 5, 25, 70,  171,200,326, 345, 999, 1000, 1005];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
//5//let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// найти сумму всех чиселб выведите в формате ‘The sum of all numbers is: 25’
// let numbers = [ 3, 5, 'hjh'];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] === 'number') {
//     sum += numbers[i];
//     }
// }
//console.log(`The sum of all numbers is: ${sum}`);


//6// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// получите массив [1000, 3, true, null, 15, undefined, 100, 313, 425];
// let arr = [ 3, 5, 'hjh', true, null];
// let arr1 = [];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] != 'string') {
//         arr1.push(arr[i]); 
//     }
// }
// console.log(arr1);











// 1.Нарисуйте ромб*

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1
// 2. Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********
// let dlina = 5;
// let yolochka = '';
// for (let i = 1; i <= dlina ; i++) {
//     for (let j = 1; j <= dlina - i; j++) {
//         yolochka += ' ';
//     }
//     for (let k = 0; k <= 2*i-1; k++) {
//         yolochka += '*'; 
//     }
//      yolochka += '\n'
//   }
//   console.log(yolochka);
// 3. Нарисуйте треугольник**
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15

// Часть 2
// 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 
// 5. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
