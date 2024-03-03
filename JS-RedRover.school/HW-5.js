/*Homework 05. Course JavaScript.
Задача.
Выполняйте пошагово.
1. Задайте объект room и его параметры:
ключ height со значением 3
ключ tv со значением samsung
ключ big со значением true*/
let room = {
  height: 3,
  tv: 'samsung',
   big: true,

}
console.log(room);

//2. Выведите в alert или console.log все параметры объекта room по очереди
console.log(room.height);
console.log(room.tv);
console.log(room.big);

//3. Выведите в alert или console.log тип данных параметра big
console.log(typeof(room.big));

//4. Выведите в alert или console.log количество символов в строке параметра tv (длину строки)

console.log(room.tv.length); 
//5. Выведите в alert или console.log результат расчёта: длина строки параметра tv минус 1
console.log(room.tv.length-1); 

//6. Поменяйте samsung на все заглавные буквы и выведите в alert или консоль лог.
console.log(room.tv.toUpperCase());
//7. Замените samsung на LG в нашем объекте room
room.tv = 'LG'
console.log(room.tv);
//8. 1. Добавьте в наш объект room ещё одну пару ключ-значение: ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
room.furniture = ["table", "chair", "sofa"];
console.log('Обновленный объект room:', room);

//8.2. выведите chair в console.log (путем обращения к массиву)
console.log(room.furniture[1]); 
//9. Удалите из нашего объекта room параметр big
delete room.big;
console.log(room); 
//10.1. Задайте переменную paint со значением color
let paint = 'color';
//10.2. Создайте объект room и внутри него задайте ключ: в качестве имени ключа возьмите из переменной paint её значение color, в качестве значения присвойте blue
let room1 = {};

room1[paint] = 'blue';

 //10.3. Выведите в консоль лог ключ и его значение blue
console.log(Object.keys(room1)[0] + ": " + Object.values(room1)[0]); 
// Задача: Создать объект Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это. 
// Создаем объект с 7 элементами
  const Testing = {
      element1: 'value1',
      element2: 'value2',
      element3: 'value3',
      element4: 'value4',
      element5: 'value5',
      element6: 'value6',
      element7: 'value7'
  };
  
  // Создаем 4 объекта, которые обладают 7 элементами из объекта Testing
  const object1 = { ...Testing };
  const object2 = { ...Testing };
  const object3 = { ...Testing };
  const object4 = { ...Testing };
  
  console.log(object1);
  