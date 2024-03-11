let movies = [
  {
    name: "Kung Fu Panda",
    rating: 7.6,
    actors: ["Jack Black", "Angelina Jolie"],
  },
  {
    name: "Titanic",
    rating: 7.9,
    actors: ["Leonardo DiCaprio", "Kate Winslet"],
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