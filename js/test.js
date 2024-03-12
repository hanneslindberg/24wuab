
document.addEventListener('DOMContentLoaded', function () {
    // Hämta URL-parametrarna från den aktuella URL:en
    var urlParams = new URLSearchParams(window.location.search);
    
    // Hämta specifik information om den klickade filmen från URL-parametrarna
    var movieName = urlParams.get('name');
    var movieRating = urlParams.get('rating');
    var movieActors = urlParams.get('actors');
  
    // Visa den specifika informationen på sidan
    document.getElementById('titel').innerHTML = movieName;
    document.getElementById('rating').innerHTML = movieRating;
  
  
  });