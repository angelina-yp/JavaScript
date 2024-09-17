//1) Фигура из чисел
/*let y = 1; // №строки
let x = 6; // отступ от края
let c = 1; // число для печати

for(let i = 0; i < 6; i++){
    let str = " ";
    str = str.repeat(x);
    for(let j = 0; j < y; j++){
        if(c < 10){
            str += " " + c + " ";
        } else str += c + " ";
        c++;
    }    
    console.log(str);
    x--;
    y++;
}*/

/*
let y = 1;
let x = 6;
let c = 1;

for(let i = 0; i < 6; i++){
    let str = " ";
    str = str.repeat(x * 2); // или по 2 пробела, будет ровнее
    for(let j = 0; j < y; j++){
        if(c < 10){
            str += " " + c + "  ";
        } else str += c + "  ";
        c++;
    }    
    console.log(str);
    x--;
    y++;
}*/
 x = 0 
  y = 6 
   x ||= y //будет 6

let x1 = null 
 y1 = 6 
 x1 &&= y1 //будет 6

let x2 = 2 
 y2 = 0 
  y2 &&= x2 //будет 0

let x3 = 3 
 y3 = 0 
  x3 ||= y3 //будет 3




console.log(x);
console.log(x1);
console.log(y2);
console.log(x3);
