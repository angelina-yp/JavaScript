//1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function f1(p1, p2) {
    let a1 = p1
    let a2 = p2
    result = p1 + p2
    console.log(result)
    return result
}

f1(2, 3)

//2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function f2(p1) {
    let a1 = p1

    result = p1 ** 2
    console.log(result)
    return result
}

f2(5)
//3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
//{"name":И,
//"surname":Ф,
//"middlename":О}
function f3(a1, a2, a3) {

    console.log(JSON.stringify({ name: a1, surname: a2, middlename: a3 }));

}

f3('Angelina', 'Poleshchuk', 'Yrevna')

//4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращает функция которая на вход принимает массив чисел.
//Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"


let arr = [1, 2, 3, 4]
function f4(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr2.push(arr[i])
        }
    }
    if (arr2.length === 0) {
        console.log("No even numbers")
    } else {
        console.log(arr2)
    }
}
f4(arr)

//5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
//Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".
function f5(s) {
    k = s.split("a").length - 1
    if (k > 0) {
        console.log(k)
    } else {
        console.log("No a characters")
    }
}
f5("cat")
//6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
//Элементы: Phone number field, CheckBox, SignIn Button.
function CheckList(web_ui) {
    let arr = [['Ввести номер телефона состоящий только из цифр','вести номер телефона с граничными значениями','вести пробел'],['выбрать один чекбокс', 'выбрать несколько чекбоксов','оставить все чекбоксы не выбраными'],['нажать на кнопку SignIn',' нажать и удерживать кнопку SignIn','нажать кнопку SignIn двойным щелчком кнопки мыши']]
if (web_ui === 'Phone number field'){
for (let i in arr[0]){
    console.log((+i+1)+ '.', arr[0][i])
}
}
if (web_ui === 'CheckBox'){
    for (let i in arr[1]){
        console.log((+i+1)+ '.', arr[1][i])
    }
    }
    if (web_ui === 'SignIn Button'){
        for (let i in arr[2]){
            console.log((+i+1)+ '.', arr[2][i])
        }
        }  
}
let web_ui = 'Phone number field'
CheckList(web_ui)

//7) Написать функцию которая на вход получает JSON а возвращяет XML
function f7(JSON) {
    let xml = '';
    for (let key in JSON) {
        xml += '<' + key + '>' + JSON[key] + '<' + key + '/>'
        
    }
    console.log(xml)
}
let JSON = {name: 'a1', surname: 'a2', middlename: 'a3' }
f7(JSON)
