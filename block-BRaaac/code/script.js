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

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createMovieUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = elm(
      "li",
      {},
      elm("p", {}, movie.name),
      elm(
        "span",
        {
          "data-id": i,
          //addEventListener("click", changeWatch);
        },
        movie.watched
      )
    );
    rootElm.append(li);
  });
}

createMovieUI();
