const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".inputBox");

const getMovieInfo = async (movie) => {
  const MyAPIKey = "6248bbd0";
  const url = `http://www.omdbapi.com/?apikey=${MyAPIKey}&t=${movie}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const movieName = inputBox.value.trim();
  if (movieName !== "") {
    getMovieInfo(movieName);
  }
  //   console.log(inputBox.value);
});
