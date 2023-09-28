
let btn = document.querySelector('.eye-btn')


let labelNameUser = document.querySelector('#user')
let validNameUser = false




let labelPass = document.querySelector('#password')
let validPass = false

let msgmError = document.querySelector('#msgm-error')

let msgmSucess = document.querySelector('#msgm-sucess')

/* <<<--- Config EYE PASSWORD --->>>
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#user-password')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else {
        inputSenha.setAttribute('type','password')
    }
})*/

/* Alterar as características name e senha e acrescentar email */

/*signin*/


/* <<<<---- Para confirmar senha no cadastramento ---->>>>


passConfirm.addEventListener('keyup', () => {
    if(passConfirm.value != senha.value){
        labelPassConfirm.setAttribute('style', 'color: red')
        labelPassConfirm.innerHTML = 'Senha - Mínimo 6 caracteres!'
        passConfirm.setAttribute('style', 'color: red')

    } else{
        labelPassConfirm.setAttribute('style', 'color: green')
        labelPassConfirm.innerHTML = 'Senha:'
        passConfirm.setAttribute('style', 'color: white')
    }
})

*/

/*login*/
/*
nameUser.addEventListener('keyup', () => {
    if (nameUser.value.length <= 2) {
        labelNameUser.setAttribute('style', 'color: red')
        labelNameUser.innerHTML = 'Nome - É necessário inserir no mínimo 3 caracteres!'
        nameUser.setAttribute('style', 'color: red')
        validNameUser = false

    } else {
        labelNameUser.setAttribute('style', 'color: green')
        labelNameUser.innerHTML = 'Usuário:'
        nameUser.setAttribute('style', 'color: white')
        validNameUser = true
    }
})
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelPass.setAttribute('style', 'color: red')
        labelPass.innerHTML = 'Senha - Mínimo 6 caracteres!'
        senha.setAttribute('style', 'color: red')
        validPass = false

    } else {
        labelPass.setAttribute('style', 'color: green')
        labelPass.innerHTML = 'Senha:'
        senha.setAttribute('style', 'color: white')
        validPass = true
    }
})

*/



