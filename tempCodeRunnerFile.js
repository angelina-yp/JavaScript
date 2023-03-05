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
