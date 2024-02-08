'use strict'
let pass = ''
let attempts = 1 
while(pass.length < 4){
    pass += Math.floor(Math.random() * 10)
}

let user_pass = prompt('Введите пароль:')
while (user_pass !== pass) {
    attempts++
    let message = ''
    if (user_pass[0] === pass[0]){
        message += 'Вы угадали первую цифру пароля\n'
    }
    if (user_pass[1] === pass[1]){
        message += 'Вы угадали вторую цифру пароля\n'
    }
    if (user_pass[2] === pass[2]){
        message += 'Вы угадали третью цифру пароля\n'
    }
    if (user_pass[3] === pass[3]){
        message += 'Вы угадали четвёртую цифру пароля\n'
    }
    if (message === ""){
        message = 'Вы не угадали ни одного символа!'
    }
    alert(message)
    user_pass = prompt('Введите пароль:')
}
alert(`Вы угадали пароль с ${attempts} попытки!`)