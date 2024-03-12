
document.addEventListener('DOMContentLoaded', function () {
    // Hämta URL-parametrarna från den aktuella URL:en
    let urlParams = new URLSearchParams(window.location.search);
    
    // Hämta specifik information om den klickade filmen från URL-parametrarna
    let movieName = urlParams.get('name');
    let movieRating = urlParams.get('rating');
    let movieActors = urlParams.get('actors');
  
    // Visa den specifika informationen på sidan
    document.getElementById('titel').innerHTML = movieName;
    document.getElementById('rating').innerHTML = movieRating;
  });