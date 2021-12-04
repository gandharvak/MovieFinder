
var movieName;

function getMovie() {
  movieName = document.getElementById("movie").value;
  if (movieName) {
    document.getElementById("output").innerHTML = ` <div class="text-center">
<div class="spinner-border text-success" role="status">
<span class="sr-only"></span>
</div>
</div>`;
    fetch("http://www.omdbapi.com/?apikey=10e4d859&t=" + movieName)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.Response === "True") {
          document.getElementById("output").innerHTML = `<div class="row">
    <div class="col text-center my-auto" id="moviePoster">
      <img src=${json.Poster} >
    </div>
    <div class="col">
      <h3 class="movie-title" style="color: #2F5233;">${json.Title}</h3>
      <p class="year"><b>Year:</b> ${json.Year}</p>
      <p class="rated"><b>Rated:</b> ${json.Rated} </p>
      <p class="released"><b>Released:</b> ${json.Released}</p>
      <p class="runtime"><b>Runtime: </b>${json.Runtime}</p>
      <p class="genre"><b>Genre:</b> ${json.Genre} </p>
      <p class="cast"><b>Actors:</b> ${json.Actors} </p>
    </div>
  </div>`;
        } else {
          document.getElementById(
            "output"
          ).innerHTML = `<div class="text-center text-danger"><h4>Movie Not Found</h4></div>`;
        }
      });
  }
}
