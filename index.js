var inputElement = document.getElementById("input")
var movieWrapper = document.getElementById("movie-wrapper")
var Status = document.getElementById("status")

function search() {
    movieWrapper.innerHTML = " "
    Status.innerHTML = "Loading..."
    var value = inputElement.value
    console.log(value)
    $.get("https://www.omdbapi.com/?apikey=45f0782a&s=" + value, function (response) {
        Status.innerHTML = ""
        if (inputElement.value == "") {
            alert("Enter movie name!!")
        }
        if (response.Response == "True") {
            var movieData = response
            for (var i = 0; i < movieData.Search.length; i++) {
                var id = movieData.Search[i].imdbID
                $.get("https://www.omdbapi.com/?apikey=8ad164ad&i="+id,function(response){
                    var movieData = response
                    console.log(movieData)
                    movieWrapper.innerHTML += `
                    <div id="movie-card">
                                <img
                                    src=${movieData.Poster} />
                                <div id="data">
                                <p><b>Title: </b><span>${movieData.Title}</span> </p>
                                <hr>
                        <p><b>Release Date: </b><span>${movieData.Released
                        }</span> </p>
                        <p><b>Director: </b><span>${movieData.Director}</span> </p>
                        <p><b>imdbRating: </b><span>${movieData.imdbRating}</span> </p>
                        <p><b>Genre: </b><span>${movieData.Genre}</span> </p>
                                    
                                </div>
                            </div>`
                    })
                }
        } else {
            Status.innerText = "---404 Error Movie Not found---"
        }


    })
}

