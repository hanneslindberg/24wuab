document.addEventListener('DOMContentLoaded', function() {
  // Hämta URL-parametrar
  var params = new URLSearchParams(window.location.search);
  
  // Hämta namnet på den klickade filmen från URL-parametrarna
  var movieName = params.get('name');
  
  // Loopa igenom arrayen av filmer för att hitta den matchande filmen
  for (var i = 0; i < movies.length; i++) {
      if (movies[i].name === movieName) {
          // Visa information om den matchande filmen
          document.getElementById('movie-name').textContent = movies[i].name;
          document.getElementById('movie-rating').textContent = movies[i].rating;
          document.getElementById('movie-actors').textContent = movies[i].actors.join(', ');
          document.getElementById('movie-description').textContent = movies[i].description;
          break; // Avsluta loopen när den matchande filmen har hittats
      }
  }
});
