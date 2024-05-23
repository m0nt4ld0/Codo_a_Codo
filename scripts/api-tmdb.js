const apiKey = 'c1f057151eae68909df52e38dfb7c19c';
//const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;
const outputElement = document.getElementById('salidaAPI');
const searchElement = document.getElementById('txtBusqueda').innerText;
const titleElement = document.getElementsByTagName('title')[0];

function busqueda() {
    const searchFilm = document.getElementById('txtBusqueda').value;
    //console.log(searchFilm);
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchFilm}&api_key=${apiKey}`;
    //console.log(apiUrl);
    fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error de red');
    }
    return response.json();
  })
  .then(data => {
    for(var r of data.results) {
        titleElement.innerHTML = `CAC-MOVIES | Resultados`,
        outputElement.innerHTML += `
        <div class="card" style="width: 10rem; float:left; margin-left:2rem;">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${r.poster_path}" alt="${r.original_title}">
            <div class="card-body">
            <h5 class="card-title">${r.original_title}</h5>
            <p class="card-text">${r.overview.substr(0,147)}...</p>
            <a href="#" class="btn btn-primary">Ver más</a>
            </div>
        </div>`
        
    }
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
