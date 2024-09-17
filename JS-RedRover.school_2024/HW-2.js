//1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
let month = 'July'
if (month === 'July' || month === 'August') {
console.log('approved')}
else {
console.log('denied')
}
//1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
//У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
let a = 1
let b = 0
let c = '/'

if (c == '+') {
    console.log (a+b)
}
else if (c == '-') {
    console.log (a-b)
}
else if (c == '*') {
    console.log (a*b)
}
else if (c == '/') {
        if (b == 0) {
        console.log('error');
} else {
        console.log(a / b); 
}
}
//1.3 Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
//«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
function daysToClimbWall(height, dayClimb, nightSlide) {
    let currentHeight = 0;
    let days = 0;
  

    while (currentHeight < height) {
        days++; // увеличение счётчика дней
        currentHeight += dayClimb; // улитка ползёт вверх
        if (currentHeight >= height) {
            break; // проверка на достижение высоты
        }
        currentHeight -= nightSlide; // улитка скользит вниз
    }

    return days;
}
let wallHeight = 5; // высота стены в метрах
let daytimeClimb = 3; // подъем за день в метрах
let nighttimeSlide = 2; // скольжение вниз за ночь в метрах


let result = daysToClimbWall(wallHeight, daytimeClimb, nighttimeSlide);
console.log(`Улитка достигнет вершины стены через ${result} дней.`);

let day = 0
let a1 = 3 //ползет 3 метра днем
let b1 = 2 //ползет 3 метра днем
let h = 5
let res = 0
if ((res += a1) < h ) {
    console.log(++day, 'день, ползи еще')
}
else if (res == h) {
    console.log(++day, 'дня')
}
res -= b1

if ((res += a1) < h ) {
    console.log(++day, 'день, ползи еще')
}
else if (res == h) {
    console.log(++day, 'дня')
}
res -= b1

if ((res += a1) < h ) {
    console.log(++day, 'день, ползи еще')
}
else if (res == h) {
    console.log(++day, 'дня')
}
res -= b1

