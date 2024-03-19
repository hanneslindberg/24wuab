let movies = [
  {
    name: "Kung Fu Panda",
    rating: 7.6,
    actors: ["Jack Black", "Angelina Jolie"],
    description: "To everyone's surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be tested as the valley's arch-enemy is on his way."
  },
  {
    name: "Titanic",
    rating: 7.9,
    actors: ["Leonardo Giannini", "Hannes Winslet"],
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
  },
  {
    name: "Interstellar",
    rating: 8.7,
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
  },
  {
    name: "Dune: Part Two",
    rating: 8.9,
    actors: ["Timothée Chalamet", "Zendaya"],
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  },
  {
    name: "Oppenheimer",
    rating: 8.4,
    actors: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Junior"],
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
  },
  {
    name: "Avatar",
    rating: 7.9,
    actors: ["Sam Worthington", "Zoe Saldana"],
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
  },
  {
    name: "The Shining",
    rating: 8.4,
    actors: ["Jack Nicholson", "Shelly Duval"],
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
  },
  {
    name: "Next",
    rating: 6.2,
    actors: ["Jicholas Cage", "Julianne Moore", "Jessica Biel"],
    description: "A Las Vegas magician who can see into the future is pursued by FBI agents seeking to use his abilities to prevent a nuclear terrorist attack."
  }, 
  {
    name: "Fight Club",
    rating: 8.8,
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
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

document.addEventListener("DOMContentLoaded", function () {
  // Hämta referens till alla länkar för filmer
  let movieLinks = document.querySelectorAll(".link_movie");

  // Lägg till eventlyssnare för varje länk
  movieLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Förhindra standardbeteende för länken
      event.preventDefault();

      // Hämta information om den klickade filmen från dess förälderelement
      let movieName = this.querySelector(".name").textContent;

      // Skapa en URL-parametersträng med den sparade informationen
      let queryParams =
        "?name=" +
        encodeURIComponent(movieName) 

      // Skicka användaren till den andra sidan med URL-parametrarna
      window.location.href = "filmer.html" + queryParams;
    });
  });
});