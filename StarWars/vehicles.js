var allStarships = [];
var starshipsCard = document.getElementById("vehiclessCard");
var cardTex = '';
var imgStarshipd = [
    "https://bit.ly/2NQJPXG",
    "https://bit.ly/2R5lQ57",
    "https://bit.ly/2NSta6d",
    "https://bit.ly/2xU19QG",
    "https://bit.ly/2xK4hiV",
    "https://bit.ly/2Om9nLC",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
   
]
peticion(www+'vehicles/',getStarships,functionFail);
function getStarships(data)
{
    var starships = data.results;
    starships.forEach(element => {
        allStarships.push(element);
    });
    if(data.next)
    {
        peticion(data.next,getStarships,functionFail);
    }
    else
    {
        renderStarships(allStarships);
    }
}

function renderStarships(allStarships)
{
    var i = 0;
    allStarships.forEach(element => {

        //peticion(element.pilots, renderPilots,functionFail);
        cardTex += `<div class="card mr-5 ml-5 mt-5 mb-5" style="width: 18rem;">
                <img class="card-img-top" src=${imgStarshipd[i]} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Modelo: ${element.model} </li>
                    <li class="list-group-item">Fabricado por: ${element.manufacturer} </li>
                    <li class="list-group-item">Pasajeros: ${element.passengers} </li>
                    <li class="list-group-item">Clase de vehiculo: ${element.vehicle_class} </li>
                    <li class="list-group-item">Largo: ${element.length}</li>
                </ul>
                <div class="card-body">
                    <p>
                        <a class="card-link" data-toggle="collapse" href="#collapse${i}" role="button" aria-expanded="false" aria-controls="collapse${i}">Peliculas en que aparece</a>
                        <div class="collapse" id="collapse${i}">
                            <div class="card card-body">
                                Peliculas de ${element.name}
                            </div>
                        </div>
                    </p>

                </div>
            </div>`;

            i = i+1;
    
    });

    starshipsCard.innerHTML =(cardTex);
    

    
}