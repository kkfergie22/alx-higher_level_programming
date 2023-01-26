$.ajax({
  type: 'GET',
  url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
  success: function (response) {
    response.results.forEach(movie => {
      $('#list_movies').append(`<li>${movie.title}</li>`);
    });
  }
});
