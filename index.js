var inputElement = document.getElementById("input")
var movieWrapper = document.getElementById("movie-wrapper")
var Status = document.getElementById("status")

function search() {
    movieWrapper.innerHTML = " "
    Status.innerHTML = "Loading..."
    var value = inputElement.value
    console.log(value)
    $.get("https://www.omdbapi.com/?apikey=45f0782a&s="+value,function(response){
        Status.innerHTML = ""
    if(inputElement.value==""){
        alert("Enter movie name!!")
    }
    if(response.Response == "True"){
        var movieData = response
        for(var i=0;i<movieData.Search.length;i++){
            movieWrapper.innerHTML += `
            <div id="movie-card">
                        <img
                            src=${movieData.Search[i].Poster} />
                        <div id="data">
                            <table>
                                <tr>
                                    <th>Title :</th>
                                    <td>${movieData.Search[i].Title}</td>
                                </tr>
                                <tr>
                                    <th>Year :</th>
                                    <td>${movieData.Search[i].Year}</td>
                                </tr>
                            </table>
                        </div>
                    </div>`
        }
    }else{
        Status.innerText = "---404 Error Movie Not found---"
    }


})
}

