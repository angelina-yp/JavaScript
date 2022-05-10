let item_1 = 5 //1. Создать переменную “item_1” 2. Присвоить переменной item_1 цифру 5.
let item_2 = 3 //4. Создать переменную “item_2” 5. Присвоить переменной item_2 цифру 3.
let item_3 = item_1 + item_2 // 7. Создать переменную “item_3” 8. Присвоить переменной item_3 сложение item_1 и item_2.
let item_4 = "yolochka" //10. Создать переменную “item_4”11. Присвоить переменной item_4 строку “Yolochka”
let sum = item_3 + item_4 
let ymn = item_3 * item_4
let item_5 = item_3 // 15. Создать переменную “item_5” 16.Присвоить переменной item_5 переменную item_3

let item_6 = 15 //17. Создать переменную item_6. 19. Присвоить переменной item_6 значение 15
let item_6_type = typeof (item_6) //  18. Создать переменную item_6_type 20. Присвоить переменной item_6_type тип переменной item_6
let item_7 = String (item_6) //22. Создать переменную item_7 и в ней преобразовать item_6 в String.
let item_7_type = typeof (item_7) //23. Создать переменную item_7_type 24. Присвоить переменной item_7_type тип переменной item_7

console.log (item_1) // 3. Вывести в консоль item_1.
console.log (item_2) // 6. Вывести в консоль item_2
console.log (item_3) // 9. Вывести в консоль item_3.
console.log (item_4) //12. Вывести в консоль item_4.
console.log (sum) // 13. Вывести в консоль сложение item_3 и item_4.
console.log (ymn) //14. Вывести в консоль умножение item_3 и item_4.


console.log ('item_6 ==', item_6, 'item_6_type --', typeof item_6) //21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log ('item_7 ==', item_7, 'item_7_type --', typeof item_7) // 25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——

let age_1 = 10 // 26. Создать переменную “age_1” и присвоить ей значение 10
let age_2 = 18 // 27. Создать переменную “age_2” и присвоить ей значение 18
let age_3 = 60 // 28. Создать переменную “age_3” и присвоить ей значение 60
if (age_1 < age_2) { // 29. Создать if в котором будите проверять значение переменной age_1
console.log ("you don't have access cause your age is " + age_1 + "it's less then") // 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
}
else if ( age_1 >= age_2 && age_1< age_3) {
    console.log ("welcome!")  // 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
} else if ( age_1 > age_3) {
    console.log ("keep calm and look culture channel")  // 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
}
else {
    console.log ("thechnical work")  //  33. Иначе выводите “Technical work”.
}


const checkAge = function(age) {

if (age < 18) {
console.log ("you don't have access cause your age is " + age + "it's less then")
}
else if ( age >= 18 && age < 60) {
    console.log ("welcome!")  
} else if ( age > 60) {
    console.log ("keep calm and look culture channel")  
}
else {
    console.log ("thechnical work")  
}
}
checkAge(61)

const checkAge1 = function(age1) {
    if (typeof(age1) == 'number'){
    if (age1 < 18) {
    console.log ("you don't have access cause your age is " + age1 + "it's less then")
    }
    else if ( age1 >= 18 && age1 < 60) {
        console.log ("welcome!")  
    } else if ( age1 > 60) {
        console.log ("keep calm and look culture channel")  
    }
    else {
        console.log ("thechnical work")  
    }
    } else {
        console.log("error")
    
    }
}
    checkAge(61)

    const checkAge2 = function(age2) {
        if (+age2) {
        if (age2 < 18) {
        console.log ("you don't have access cause your age is " + age2 + "it's less then")
        }
        else if ( age1 >= 18 && age2 < 60) {
            console.log ("welcome!")  
        } else if ( age2 > 60) {
            console.log ("keep calm and look culture channel")  
        }
        else {
            console.log ("thechnical work")  
        }
        } else {
            console.log("error")
        
        }
    }
        checkAge("hj")