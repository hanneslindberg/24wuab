document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);

  var movieName = params.get("name");

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].name === movieName) {
      document.getElementById("movie-name").textContent = movies[i].name;
      document.getElementById("movie-rating").textContent = movies[i].rating;
      document.getElementById("movie-actors").textContent =
        movies[i].actors.join(", ");
      document.getElementById("movie-description").textContent =
        movies[i].description;
      document.getElementById("movie-image").src = movies[i].image;
      break;
    }
  }
});
