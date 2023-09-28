const btn = document.getElementById("btn-topo")
btn.addEventListener("click",function(){
    window.scroll(0,0)
})

document.addEventListener("scroll",ocultar)
function ocultar(){
    if(window.scrollY > 20){
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
}

ocultar()

document.addEventListener("DOMContentLoaded", function() {
    
    const btnTheme = document.getElementById('btn-theme');
    
    // const imagem = document.getElementById('mega-filmes');
    
    btnTheme.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        // imagem.classList.toggle('nova')
    })
})
var filmes = "./assets/img_Contato/Logo-Mega-Filmes.png"
var filmes2 = "./assets/img_Contato/Logo-Mega-Filmes1.png"
function trocar(){
    document.getElementById("megafilms").src = filmes2;
    let aux = filmes2;
    filmes2 = filmes;
    filmes = aux;
}