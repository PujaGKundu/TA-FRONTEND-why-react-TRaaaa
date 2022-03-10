let input = document.querySelector('input[type="text');
let rootElm = document.querySelector(".movies_list");

let allMovies = [
  {
    name: "Mission Impossible",
    watched: "To Watch",
  },
  {
    name: "Up",
    watched: "Watched",
  },
];

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: "To Watch",
    });
    event.target.value = "";
    createMovieUI();
  }
});

function changeWatch(event) {
  let id = event.target.dataset.id;
  if (allMovies[id].watched === "To Watch") {
    allMovies[id].watched = "Watched";
  } else {
    allMovies[id].watched = "To Watch";
  }
  createMovieUI();
}

let elm = React.createElement;

function createMovieUI() {
  let movies = allMovies.map((movie, i) => {
    let li = elm(
      "li",
      {},
      elm("p", { for: i }, movie.name),
      (span = elm(
        "span",
        {
          "data-id": i,
          onClick: changeWatch,
        },
        movie.watched
      ))
    );
    return li;
  });
  ReactDOM.render(movies, rootElm);
}

createMovieUI();
