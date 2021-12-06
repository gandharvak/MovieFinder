var movieName;

function cardClose(){
  document.getElementById("cardClose").style.display="none";
}

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
          document.getElementById("output").innerHTML = 
          `<div class="row text-center" id="output">
        <div class="col align-self-center">
          <div class="card mx-auto shadow" style="width: 18rem;">
            <img src=${json.Poster} class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">${json.Title}</h3>
              <p class="card-text">${json.Actors}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Year: </b>${json.Year}</li>
            <li class="list-group-item"><b>Rated: </b>${json.Rated}</li>
            <li class="list-group-item"><b>Released: </b>${json.Released}</li>
            <li class="list-group-item"><b>Runtime: </b>${json.Runtime}</li>
            <li class="list-group-item"><b>Genre: </b>${json.Genre}</li>
            <li class="list-group-item"><b>Released: </b>${json.Released}</li>
            </ul>
          </div>
        </div>
      </div>
          `
          document.getElementById("foot").className="text-center text-white sticky-bottom"
          ;
        } else {
          document.getElementById(
            "output"
          ).innerHTML = `<div class="text-center text-danger"><h4>Movie Not Found</h4></div>`;
        }
      });
  }
}

// setTimeout(function(){ 
//   document.getElementById("cardClose").style.display="block"
// }, 2000);