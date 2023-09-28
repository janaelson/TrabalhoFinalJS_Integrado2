document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  const movieList = document.querySelector("#movie-list");
  const searchResult = document.querySelector("#search-result");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value;

    if (!query) {
      alert("Por favor, insira um termo de pesquisa.");
      return;
    }

    const apiKey = "5cde0046";

    const apiUrl = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          displayMovies(data.Search);
          searchResult.textContent = "Resultado da pesquisa:";
          searchResult.style.display = "block";
        } else {
          alert("Nenhum filme encontrado para a pesquisa.");
          searchResult.textContent = "";
          searchResult.style.display = "none";
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      });
  });

  // searchButton.addEventListener("keydown", function (event) {
  //   if (event.key === "Enter") {
  //     const query = searchInput.value;

  //     if (!query) {
  //       alert("Por favor, insira um termo de pesquisa.");
  //       return;
  //     }

  //     const apiKey = "5cde0046";

  //     const apiUrl = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

  //     fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.Response === "True") {
  //           displayMovies(data.Search);
  //           searchResult.textContent = "Resultado da pesquisa:";
  //           searchResult.style.display = "block";
  //         } else {
  //           alert("Nenhum filme encontrado para a pesquisa.");
  //           searchResult.textContent = "";
  //           searchResult.style.display = "none";
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Ocorreu um erro:", error);
  //       });
  //   }
  // });

  function displayMovies(movies) {
    movieList.innerHTML = "";

    movies.forEach((movie) => {
      const listItem = document.createElement("div");
      listItem.classList.add("col-md-3");
      listItem.innerHTML = `
        <img src="${movie.Poster}" class="img-fluid" alt="${movie.Title}">
        <h2 class="movie-Title">${movie.Title}</h2>
        <p class="movie-year">${movie.Year}</p>`;
      movieList.appendChild(listItem);
    });
  }
});



document.addEventListener("DOMContentLoaded", function() {
  
  const btnTheme = document.getElementById('btn-theme');

  var filme = '../assets/src/images/Logo-Mega-Filmes1.png'
  var filme2 = './assets/src/images/Logo-mega-filmes2.png'

  function trocar(){
    let aux = filme;
    filme = filme2;
    filme2 = aux;
    document.getElementById("mega-filmes").src = filme;
  }

btnTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    trocar();
})
})


window.onscroll = function() {
  var button = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
};


function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
}

