//1.Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 
//let a1 = 1
//let b1 =0
//let c = '/'

//switch (c) {
//case "+": 
  //  console.log (a1+b1)
//break
//case "-":
  //  console.log (a1-b1)
//break
//case "*":
   // console.log (a1*b1)
//break
//case "/":
       // if (b1 == 0) console.log('error');
        //break
//default:
 //       console.log(a1 / b1); 
//}

//2.Попробуйте внедрить в свою программу с кофе вложенный if

// let Big = 10;
// let Medium = 5;
// let Small = 3;

// let in1 = "корица";
// let in2 = "кофе";
// let in3 = "сливки";
// let in4 = "сливки";

// let Type = prompt('Введите номер кофе: \n 1. "Arabica" \n 2. "Latte"');
// let Size = prompt('Введите номер размера: \n 1. "Big" \n 2. "Small" \n 3. "Medium"');

// if (Type === "1" || Type === "2") {  
//     if (Type === "1") {
//         console.log("Название кофе: Arabica");
//         console.log("Рецепт: " + i1 + "," + i2 +"," + i4);
//     } else {
//         console.log("Название кофе: Latte");
//         console.log("Рецепт: " + i1 + "," + i2 + "," + i3 + "," + i4);
//     }
    
//     if (Size === "1") {
//         console.log("Стоимость: " + Big);
//     } else if (Size === "2") {
//         console.log("Стоимость: " + Small);
//     } else if (Size === "3") {
//         console.log("Стоимость: " + Medium);
//     } else {
//         console.log("Неизвестный размер кофе");
//     }
// } else {
//     console.log("Неизвестный тип кофе");
//}
//3.При помощи цикла for выведите чётные числа от 2 до 10
//function printEvenNumbers() {
   // for (let i = 2; i <= 10; i++) {
       // if (i % 2 === 0) {
      //      console.log(i);
       // }
   // }
//}
//console.log(printEvenNumbers(1,2,3,4,5,6,7,8,9,10));

//4.Задача с интервью*
//У вас есть массив со скобками, предположим 
//[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
//Нужно выяснить, равно ли количество открывающих и закрывающих скобок одного типа (последовательность не так важна, но если решите и это, то супер)

function print(arr) {
    let j = 0; 
    let k = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            j++;
        } else if (arr[i] === ')') {
            k++;
        }
    }

    if (j === k) {
        console.log(true);
    } else {
        console.log(false);
    }
}

const arr = ['(', '(', ')', ')','('];
print(arr);



//5.Перепишите задачу с улиткой с помощью цикла for
/*let h = 5; // высота стены
let a = 3; // подъем за день
let b = 2; // скольжение ночью
let h1 = 0; // текущая высота улитки
let days = 0; // количество дней

for (; ;) {
    days++; // увеличиваем количество дней
    h1 += a; // улитка поднимается вверх

    if (h1 >= h) { // проверка на достижение вершины
        break; // прерываем цикл, если улитка достигла вершины
    }

    h1 -= b; // улитка скользит вниз ночью
}

console.log(`Улитка достигнет вершины стены за ${days} дн.`);*/


