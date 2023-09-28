if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar a HOME')
    setTimeout(() => {
        window.location.href = 'http://localhost:5500/login.html'
    }, 500);
}

let userLogged = JSON.parse(localStorage.getItem('userLogged'))

let logged = document.querySelector('#logged')

logged.innerHTML = `Seja bem vindo, ${userLogged.nomeValid}!`

function logout(){
    localStorage.removeItem('token')
    
    logged.innerHTML = `Até mais, ${userLogged.nomeValid}!`

    localStorage.removeItem('userLogged')

    setTimeout(() => {
        window.location.href = 'http://localhost:5500/login.html'
    }, 2000);


}