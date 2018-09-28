var allStarships = [];
var starshipsCard = document.getElementById("speciesCard");
var cardTex = '';
var imgStarshipd = [
    "https://vignette.wikia.nocookie.net/starwars/images/0/0e/Hutt_warrior_TEGTW.JPG/revision/latest?cb=20170309071948",
    "https://bit.ly/2xOC76h",
    "https://bit.ly/2Qhej1B",
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
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
    "https://bit.ly/2QgeiLn",
   
]
peticion(www+'species/',getStarships,functionFail);
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
                    <li class="list-group-item">Clasificacion: ${element.classification} </li>
                    <li class="list-group-item">Designacion: ${element.designation} </li>
                    <li class="list-group-item">Colores de piel: ${element.skin_colors} </li>
                    <li class="list-group-item">Colores de ojos: ${element.eye_colors} </li>
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