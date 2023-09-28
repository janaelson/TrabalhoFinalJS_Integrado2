function concluirCadastro() {
  let nameUser = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmarSenha').value;
  var regexNome = /^[A-Za-z\s]+$/;
  if (!nameUser || !email || !senha || !confirmarSenha) {

    alert('Por favor, preencha todos os campos.');
  } else if (senha != confirmarSenha) {

    alert('Senha ou confirmação de senha incorretas');

  } else if (!validarSenha(senha)) {

    alert('Sua senha não contem um ou mais dos requisitos a seguir caractere especial, letra maiuscula, letra minuscula ou seis caracteres.');

  } else if (!validarEmail(email)) {

    alert('Email não é Valido');

  } else if (!regexNome.test(nameUser)) {
    alert("Digite apenas letras e espaços no nome.");

  } else {

    let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')


    listUser.push(
      {
        nomeSet: nameUser,
        emailSet: email,
        passwSet: senha

      }
    )

    localStorage.setItem('listUser', JSON.stringify(listUser))

    msgmSucess.setAttribute('style', 'display: block')
    msgmSucess.innerHTML = 'Cadastrando...'
    msgmError.innerHTML = ''
    msgmError.setAttribute('style', 'display: none')
    setTimeout(() => {
      window.location.href = 'http://localhost:5500/indexHome.html'
    }, 1000);

  }

}

function validarEmail(email) {
  // Expressão regular para validar um e-mail
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Testa o e-mail usando a expressão regular
  return regexEmail.test(email);
}

function validarSenha(senha) {
  // Expressão regular para verificar se a senha atende aos critérios
  var regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

  // Testa a senha usando a expressão regular
  return regexSenha.test(senha);
}

function mostrarSenha() {

  document.getElementById('olho').addEventListener('mousedown', function () {
    document.getElementById('senha').type = 'text';
  });

  document.getElementById('olho').addEventListener('mouseup', function () {
    document.getElementById('senha').type = 'password';
  });

  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function () {
    document.getElementById('senha').type = 'password';
  });

}

function mostrarConfirmarSenha() {

  document.getElementById('olho2').addEventListener('mousedown', function () {
    document.getElementById('confirmarSenha').type = 'text';
  });

  document.getElementById('olho2').addEventListener('mouseup', function () {
    document.getElementById('confirmarSenha').type = 'password';
  });

  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho2').addEventListener('mousemove', function () {
    document.getElementById('confirmarSenha').type = 'password';
  });

}

function mostrarSenhaLogin() {

  document.getElementById('olho3').addEventListener('mousedown', function () {
    document.getElementById('user-password').type = 'text';
  });

  document.getElementById('olho3').addEventListener('mouseup', function () {
    document.getElementById('user-password').type = 'password';
  });


  document.getElementById('olho3').addEventListener('mousemove', function () {
    document.getElementById('user-password').type = 'password';
  });

}

//Credencial Google
function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);


  // Exiba os dados recebidos
  fullName.textContent = data.name;
  sub.textContent = data.sub;
  given_name.textContent = data.given_name;
  family_name.textContent = data.family_name;
  email.textContent = data.email;
  verifiedEmail.textContent = data.email_verified;
  picture.setAttribute("src", data.picture);

  document.getElementById("sub").remove();
  document.getElementById("verifiedEmail").remove();
  document.getElementById("given_name").remove();
  document.getElementById("email").remove();
  document.getElementById("family_name").remove();

  // Verifique se os dados do Google foram preenchidos
  if (data.email) {

    let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')


    listUser.push(
      {
        nomeSet: data.given_name,
        emailSet: data.email,
        passwSet: data.sub

      }
    )
    localStorage.setItem('listUser', JSON.stringify(listUser))

    msgmSucess.setAttribute('style', 'display: block')
    msgmSucess.innerHTML = 'Cadastrando...'
    msgmError.innerHTML = ''
    msgmError.setAttribute('style', 'display: none')

    alert("Sua Senha Automatica é: " + data.sub + ", não se esqueça de alterar!",);
    setTimeout(function () {
      window.location.href = "http://localhost:5500/indexHome.html";
    }, 10000);
  } else {
    // Caso contrário, não redirecione e mostre uma mensagem de erro, se desejar
    alert("Ainda estamos obtendo seus dados do Google. Por favor, aguarde.");
  }
}

window.onload = function () {
  const clientID = "986643262748-imf4i14la32us1bblo38tbm664n8rre0.apps.googleusercontent.com";

  google.accounts.id.initialize({
    client_id: clientID,
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), {
    theme: "outline",
    size: "large",
    type: "standard",
    shape: "pill",
    locale: "pt-BR",
    logo_alignment: "center",
    logo_alignment: "center"
  } // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
};


document.addEventListener("DOMContentLoaded", function () {

  const btnTheme = document.getElementById('btn-theme');

  // const imagem = document.getElementById('mega-filmes');

  btnTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  })
})


