// ============= Objects =================================
/**
 * In JavaScript, objects are king. If you understand objects, you understand
 *  JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

Objects are variablrs!
It is a common practice to declare objects with the const keyword.
 */

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.
// Они хранят свойства (пары ключ-значение), где:

// => Ключи свойств должны быть строками (string) или символами (symbol) (обычно строками).
// => Значения могут быть любого типа.
// => Чтобы получить доступ к свойству, мы можем использовать:

// => Запись через точку: obj.key.
// => Квадратные скобки obj["key"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Удаление свойства: delete obj.key  , see methods for extra exlanation
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for(let key in obj).


//  ======= examples:

//{key : values,} -property   {ключ : значение} - свойство

// const person = {
//   name: "Ivan",
//   surname: "Petrov",
//   age: 33,
//   job: "QA engineer",
//   isAdmin: false
// }
// [1,2,3]

const person2 = {
    id: 2,
    personalInfo: {
       name: {
          first: 'Jane',
          lastName: 'Dow',
       },
      dob: '01/01/1990',
      "contactInfo": {
        phone: '+123456789',
        email: null,
        address: {
          city: "Boston",
          state: "M"
        }
      },
    },
   purchases: [null],
   car: "Suzuki"
  }
//console.log(person2.personalInfo.name['lastName']);

//  console.log(typeof person2);


//conpare with array
let arrNew = [["name", 'Olya'],["age", 22]]
// arrNew[0][1]

//const arr = [1];
//console.log(arrNew[1]);


// ===================  Обьявление обьекта  ===========================

 let objNew = new Object();  //option 1
// let user = {};           //option 2
// objNew = {
//   name: 'Bob',
//   age: 21,
// }

// console.log(objNew)

// let obj = {
//    _name: 'Bob',
//   age: 21,
//   "2is Adult": true,
//   "salary": undefined,
//   '4': null,
//   address: [],
//   myObj: {},
// }
// console.log(obj[4]);

// Последнее свойство объекта (property) может заканчиваться запятой ",".

// =========================================

// ключ может состоять из нескольких слов, но тогда он
// _обязательно_ должен быть заключен в кавычки:
// let number
// number = 9

let user5 = {
  fullName: "John Adams",
  age: 30,
  highSchool: true,
}
 delete user5.age
// console.log( user5);

//====== delete operator for arrays
// let fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// console.log(fruits)
// delete fruits[1]
// console.log(fruits[1])


//=================== Оператор delete =========================
//  delete user1.address.country;     //удаление свойства country
//  console.log("deleted  ", user1 );


// ==================== Обращение к свойствам  =============================
// Для обращения к свойствам используется запись «через точку»:
// person.name, person.age.
//  или через [ ] :  person['name'], person["age"]

// const person = {

//   age: 30,
//   "likes cats": true,
//    name: 'Joey',
// };

// // //выведение значения

//  console.log(person.name);
//  console.log(person.age);

// //let arr = [4, "g", 66]
//  console.log(person["name"]); //arr[0]
//  console.log(person['age']);
//   console.log(person["likes cats"]);


// ===============  Добавление свойства (Add property)  ================================
//создаем объект
// const obj = {};
// //console.log(obj)

// //присваиваем значения
// obj.name = 'Jess'; //через точку arr[0]= "jess"
// // console.log(obj);

// obj['likes read'] = true; //через скобки []
// //console.log(obj.read);

//  obj['age'] = 28;
//  //console.log(obj);

// let carModel = 'car'; //через переменную
// let num = 2
// obj[carModel] = 'volvo';
// obj['carModel'] = num;
// console.log(obj);


//===================  Изменение свойства(property)  =======================
// let fullName = {first: 'Adam', last: 'Petersen'}

// obj.name = fullName;           //через точку
// obj['likes read'] = false;   //через скобки []
// obj[carModel] = 5;           //через переменную

// //  console.log(obj);


// //Example:
// //let user = new Object()
// const user1 = {
//   name: "John",
//   age: 30,
//   highSchool: true,
// }

// value of age и name изменено:
//  user1.age = 20;
//  user1.name = 'Bill';
//  console.log("modified ", user1);
//  console.log(user1.city)

// //добавлено свойство address:
// user1.address = {
//   city: 'SF',
//   state: 'CA',
//   country: 'USA',
// }
// user1['hello'] = "Hi"
// console.log("added new key - address and hello ", user1);
// console.log(user1.address.state);


// ================== Создание объекта с использованием переменной  =====

// let name1 = "Anna";
// let age = 17
// const myPerson = {
//    [name1]: name1,
//    [age]: age   
// };
// console.log(myPerson);

//=================== Обращение к свойствам объекта =======================

let arr = [1,3,5,7]
const customers = [
  {               //   !!! Array[0]
    id: '01',                //
    personalInfo: {  name: {
        first: 'John', 
        last: 'Dow'
        }, 
      },
  },

  {                //    !!! Array[1]
    id: '02',                //
    personalInfo: {          //
      name: {                //
        first: 'Jane',       //
        last: 'Dow',         //
      },
      dob: '01/01/1990',         //
      "contactInfo": {           //
        phone: '+123456789',     //
        email: [3,7,[4,8]],             //
        address: null,           //
      },
    },
     purchases: [{two: 2},6, 3],           //
  }];

// 1. Свойства 1-го уровня -array elements
  // console.log(customers.length);
  // console.log(customers[0]);
  // console.log(customers[1]);
  // console.log(customers[2]);

// // 2. Свойства 2-го уровня -from array to object
  // console.log(customers[0].id);
  // console.log(customers[0]['id'])

// // 3. Свойства 3-го уровня
//  console.log(customers[1].personalInfo.name);
//  console.log(customers[1].personalInfo['dob']);
//  console.log(customers[1]['personalInfo']['dob']);

// 4. Свойства 4-го уровня
//  console.log(customers[1].personalInfo.name.first);
//  console.log(customers[1].personalInfo.contactInfo.email);
//  console.log(customers[1]['personalInfo']['contactInfo']['email'][1]);

// ================== Проверка существования свойства  =========================

// ===== проверка с undefined
// В отличие от многих других языков, особенность JavaScript-объектов в том,
// что можно получить доступ к любому свойству. Даже если свойства не существует –
// ошибки не будет!

// При обращении к свойству, которого нет, возвращается undefined.
// Это позволяет просто проверить существование свойства:

let user7 = {
   newKey: 'MY Key',
};
// console.log(user7)
// console.log(user7.age);
// console.log(user7.newKey);
// console.log(user7.name === undefined); // true означает "свойства нет"
user7.name = "Anna"
// console.log(user7)
// user.name = " Pavel"
// console.log(user7)
// console.log(user7.newKey !== undefined)

// ===== через оператор in check the key
// let obj = {
//    firstName: 'Sofia',
//    lastName: 'I.',
//    age: 35,
//    language: 'Java',
//    newKey: undefined,
//    9: false,
//    job: {
//       name1: "Olga",
//       newObj: { age1: 23 }
//    },
// };
//console.log(obj);

//  console.log('firstName' in obj);
//  console.log("first" in obj);
//  console.log(undefined in obj);
//  console.log( 'age1' in obj.job.newObj);  // can't check by value



// =================== Example ============================
let userInfo = {
   name: "Anna",
   age:  30,
   address : {
      city: "Boston",
      street: "Rose Dr."
   }
}
// console.log(userInfo?.address?.street)

// //Operator in
// if ("name" in userInfo){            // check if key  -name- in object
//    console.log(userInfo.name)
// }else{
//   userInfo.name = 'Peter'
// }

// console.log(userInfo)



/**опциональная цепочка
 * JavaScript code uses optional chaining (?.) to safely access the street 
 * property of the address property of the userInfo object.
 */
// console.log(userInfo?.address?.street)


// ====================== Oбращение, добавление на примере ============= 


// let obj = {
//   firstName: 'Sofia', 
//   lastName: 'I.', 
//   country: 'Argentina', 
//   continent: 'Americas', 
//   age: 35, 
//   language: 'Java'
// };
// let name1 = obj.firstName;
// let language = obj.language;

// console.log(name1," ," , language);

//let a = `Hi ${name1}, Do you like ${obj.language}?`;

// console.log(a);

// let newKey = 'hello';
// obj[newKey] = a;      // obj.hello = a;

// console.log(obj);


// =======================  Цикл for ... in  ================================ 
// Для итерации по объекту используется цикл for ... in
// for (let key in object) {
//   тело цикла выполняется для каждого свойства объекта
// }

// const arr = ['a', 'b', 'c'];
// for (let i = 0; ; i++) {}
// for (let el of arr) {}


// let obj = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for(let key in obj){
//   // ключи
//   //console.log(key);  // name, age, isAdmin

// //   // значения ключей
//  //console.log(obj[key]); // John, 30, true   /arr[i]

//   console.log(key + ": " + obj[key]);
// }


// count salaries
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

//  let sum = 0;
// for(let key in salaries) { 
//    sum += salaries[key];
// }

//  console.log(sum); // 390


// let obj = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   let res = 0;
//   for(let key in obj) {
//      //res += obj[key] * 2;
//     if(typeof obj[key] == 'number'){
//       res += obj[key] * 2;
//    }
//   }
//   return res;
// }
// console.log(multiplyNumeric(obj));




// ======================  Методы объектов  ================================= 

// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].


let user = {
  name: "John",
  age: 30,
  isAdmin: true,
  language: "JavaScript",
};

// console.log("Keys: ", Object.keys(user));    //выводит ключи (keys)
// console.log("Values: ", Object.values(user));  //выводит значения (values)
// console.log(Object.entries(user)); //выводит массив массивов

// ============== Перебор в цикле =========================
//console.log('===========');
let user3 = {
  name: {name: "Kate", age2 : 22},
  age: 30,
  language: 'en',
  home: 'apartment',
  number: 6
}

// перебор значений -checking values
for (let i of Object.values(user3.name)) {
  console.log(i); 
}





// =======
// const str = 'ABCD EFGHIJKLMNOPQRSTUVWXYZ';

// const obj = {};

// for(let i = 0; i < str.length; i++){
//     obj[i+1] = str[i];
// };
// console.log(obj);

// //----------- ==; === -------- compare arrays

// let arr = [1, 2];
// let arr1 = ["a", "b"]

// console.log(arr == arr1);
// console.log(arr > arr1);
// console.log(arr < arr1);

// const a = [1, 2, 3];
const b = [1, 2, 3]

// const a1 = [1, 2, 7];
// const b1 = [1, 2, 6];
// let a2 = a1.join()
// let b2 = b1.join()

// console.log(JSON.stringify(a1) == JSON.stringify(b1)) // compare string
//  console.log(JSON.stringify(a1))
// console.log(b.toString() === a.toString());
// let z = b.toString()
//let x = JSON.stringify(b)

//console.log(x.length)
// =========================

//let arr = [1, 2, 3];
let emptyArr = []
// emptyArr.push(1, 5, 7)
// emptyArr.push(1, 3, 5, "f")
// emptyArr[0] = "A"
// console.log(emptyArr)
// let str2 =
// console.log(String(arr), " /", String(emptyArr) );