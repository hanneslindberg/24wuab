let movies = [
  {
    name: "Kung Fu Panda",
    rating: 7.6,
    actors: ["Jack Black", "Angelina Jolie"]
  },
  {
    name: "Titanic",
    rating: 7.9,
    actors: ["Leonardo DiCaprio", "Kate Winslet"]
  },
  {
    name: "Interstellar",
    rating: 8.7,
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  },
  {
    name: "Dune: Part Two",
    rating: 8.9,
    actors: ["Timothée Chalamet", "Zendaya"]
  },
  {
    name: "Oppenheimer",
    rating: 8.4,
    actors: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Junior"]
  },
  {
    name: "Avatar",
    rating: 7.9,
    actors: ["Sam Worthington", "Zoe Saldana"]
  }
];

let template = document.getElementById("movies");

for (let movie of movies) {
  let copy = template.content.cloneNode(true);

  copy.querySelector(".name").textContent = movie.name;
  copy.querySelector(".rating").textContent = movie.rating;
  copy.querySelector(".actors").textContent = movie.actors.join(" - ");

  template.parentElement.appendChild(copy);
}

console.log(movies[0].actors[0]);
console.log(movies[0].actors[1]);

document.addEventListener('DOMContentLoaded', function () {
  // Hämta referens till alla länkar för filmer
  let movieLinks = document.querySelectorAll('.link_movie');

  // Lägg till eventlyssnare för varje länk
  movieLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Förhindra standardbeteende för länken
      event.preventDefault();

      // Hämta information om den klickade filmen från dess förälderelement
      let movieName = this.querySelector('.name').textContent;
      let movieRating = this.querySelector('.rating').textContent;
      let movieActors = this.querySelector('.actors').textContent;

      // Skapa en URL-parametersträng med den sparade informationen
      let queryParams = '?name=' + encodeURIComponent(movieName) +
                        '&rating=' + encodeURIComponent(movieRating) +
                        '&actors=' + encodeURIComponent(movieActors);

      // Skicka användaren till den andra sidan med URL-parametrarna
      window.location.href = 'filmer.html' + queryParams;
    });
  });  
});

