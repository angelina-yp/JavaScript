//1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function f1(p1,p2){
    let a1 = p1
    let a2 = p2
    result = p1 + p2
    console.log(result)
    return result
}

f1(2, 3)

//2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function f2(p1){
    let a1 = p1
    
    result = p1 * p1
    console.log(result)
    return result
}

f2(5)
//3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
//{"name":И,
//"surname":Ф,
//"middlename":О}
function f3(a1,a2,a3){
    
    console.log(JSON.stringify({ name: a1, surname: a2, middlename: a3 }));
    
}

f3('Angelina', 'Poleshchuk','Yrevna')

//4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращает функция которая на вход принимает массив чисел.
//Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

//var arr = [4, 5, 7, 8, 14, 45, 76];

//function f4(a) {
  //var ar = [];

  //for (var i = 0; i < a.length; i++) {
    //ar.push(a[2 * i + 1]);
  //}

  //return ar;
//}

//console.log(even(arr));
//f4()



//5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
//Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".
function f5(s) {
    k = s.split("a").length-1
    if (k>0) {
    console.log(k) 
    } else {
        console.log ( "No a characters")
    }   
}
f5("gggg")
//6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
//Элементы: Phone number field, CheckBox, SignIn Button.
//7) Написать функцию которая на вход получает JSON а возвращяет XML