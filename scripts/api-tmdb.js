const apiKey = 'c1f057151eae68909df52e38dfb7c19c';
const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;
const outputElement = document.getElementById('salidaAPI');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error de red');
    }
    return response.json();
  })
  .then(data => {
    outputElement.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}" alt="${data.original_title}">
        <div class="card-body">
        <h5 class="card-title">${data.original_title}</h5>
        <p class="card-text">${data.overview}</p>
        <a href="#" class="btn btn-primary">Ver más</a>
        </div>
    </div>`
  })
  .catch(error => {
    console.error('Error:', error);
  });