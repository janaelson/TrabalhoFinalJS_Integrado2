function login() {
    let userName = document.querySelector('#user-name');
    let userNameLabel = document.querySelector('#user');
    let userPass = document.querySelector('#user-password');
    let userPassLabel = document.querySelector('#password');
    let msgmError = document.querySelector('#msgm-error');
    let msgmSucess = document.querySelector('#msgm-sucess');
    let listUser = [];
    let userValid = {
        nomeValid: '',
        senhaValid: ''
    };
    listUser = JSON.parse(localStorage.getItem('listUser'));

    // Função para verificar se a string contém apenas letras e espaços
    function isAlphaAndSpace(str) {
        return /^[a-zA-Z\s]*$/.test(str);
    }

    // Validar se o campo de nome contém apenas letras e espaços
    if (!isAlphaAndSpace(userName.value)) {
        userNameLabel.setAttribute('style', 'color: red');
        msgmError.setAttribute('style', 'display: block');
        msgmError.innerHTML = 'Digite apenas letras e espaços no nome';
        userName.focus();
        return; // Impede que a função continue se o nome for inválido
    }

    // Verificar se ambos os campos estão preenchidos
    if (userName.value && userPass.value) {
        listUser.forEach((item) => {
            if (userName.value == item.nomeSet && userPass.value == item.passwSet) {
                userValid = {
                    nomeValid: item.nomeSet,
                    senhaValid: item.passwSet
                };
            }
        });
        if (userName.value == userValid.nomeValid && userPass.value == userValid.senhaValid) {
            msgmError.setAttribute('style', 'color: none');
            msgmError.style.color = '';
            msgmSucess.setAttribute('style', 'display: block');
            msgmSucess.innerHTML = 'Usuário autorizado';
            setTimeout(() => {
                window.location.href = "http://localhost:5500/indexHome.html";
            }, 1000);
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            localStorage.setItem('token', token);
            localStorage.setItem('userLogged', JSON.stringify(userValid));
        } else {
            userNameLabel.setAttribute('style', 'color: red');
            userPassLabel.setAttribute('style', 'color: red');
            msgmError.setAttribute('style', 'display: block');
            msgmError.innerHTML = 'Usuário ou senha incorretos';
            userName.focus();
        }
    } else {
        msgmError.setAttribute('style', 'display: block');
        msgmError.innerHTML = 'Por favor, preencha todos os campos';
    }
}
