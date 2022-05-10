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