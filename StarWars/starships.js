var allStarships = [];
var starshipsCard = document.getElementById("starshipsCard");
var cardTex = '';
var imgStarshipd = [
    "https://bit.ly/2R7kfM3",
    "https://bit.ly/2Onk6p9",
    "https://nerdist.com/wp-content/uploads/2017/12/Death-Star-Construction-1.jpg",
    "https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/p/g/pg-1-72-millennium-falcon-00.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=768",
    "https://img1.cgtrader.com/items/708797/27ef4ea1ae/large/x-wing-fighter-3d-model-low-poly-rigged-max-obj-3ds-fbx-lwo-lw-lws-mtl.png",
    "http://pm1.narvii.com/6332/47969c102ec015574f9edfaac833ae66fb30f1bc_00.jpg",
    "http://images.moc-pages.com/user_images/83528/1483192806m_SPLASH.jpg",
    "https://vignette.wikia.nocookie.net/starwars/images/d/d3/ImperialShuttle-DB.png/revision/latest?cb=20150920051331",
    "https://vignette.wikia.nocookie.net/starwarsmush/images/2/2c/Ship_capital_nebb01.jpg/revision/latest?cb=20090619153131",
    "https://vignette.wikia.nocookie.net/starwars/images/9/94/MCLiberty.jpg/revision/latest?cb=20070104001953",
    "https://vignette.wikia.nocookie.net/starwars/images/9/99/A_wing.jpg/revision/latest?cb=20060705194935",
    "https://i.ebayimg.com/images/g/4ekAAOSwjkdZ8wOl/s-l640.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/databank_republicattackcruiser_01_169_812f153d.jpeg?region=0%2C0%2C1560%2C878&width=768",
    "https://i.pinimg.com/originals/70/87/5b/70875bf98a7473962b6f0dfded4d085f.png",
    "https://vignette.wikia.nocookie.net/starwars/images/9/9a/Naboo_Royal_Starship_SWE.png/revision/latest?cb=20161019070103",
    "http://pm1.narvii.com/6708/8fdb3516d9bfb334aa35e3eb295569cbaffcbe93_00.jpg",
    "https://vignette.wikia.nocookie.net/waryn/images/a/ae/Sovereign.png/revision/latest?cb=20100722163918",
    "https://cdn.thingiverse.com/renders/18/9f/c9/80/a5/cb2efe3ddd21cc626460327ab55e540d_preview_featured.jpg",
    "https://www.super-hobby.es/zdjecia/7/1/9/20828_rd.jpg",
    "https://static.wixstatic.com/media/e3b77d_bedf67bab7614e48aa174b32d80201b7.png/v1/fill/w_783,h_520,al_c,q_90,usm_0.66_1.00_0.01/e3b77d_bedf67bab7614e48aa174b32d80201b7.webp",
    "https://bit.ly/2xZ1TUN",
    "https://bit.ly/2OYsGYD",
    "https://bit.ly/2y1guPh",
    "https://bit.ly/2DDd23F",
    "https://bit.ly/2N7t6dm",
    "https://bit.ly/2IsyJlO",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]
peticion(www+'starships/',getStarships,functionFail);


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

        element.films.forEach(urls => {
            peticion(urls, renderFilms,functionFail);
        });
        //peticion(element.pilots, renderPilots,functionFail);
        cardTex += `<div class="card mr-5 ml-5 mt-5 mb-5" style="width: 18rem;">
                <img class="card-img-top" src=${imgStarshipd[i]} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Modelo: ${element.model} </li>
                    <li class="list-group-item">Fabricantes: ${element.manufacturer} </li>
                    <li class="list-group-item">Pasajeros: ${element.passengers} </li>
                    <li class="list-group-item">Clase: ${element.starship_class} </li>
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

                    <p>
                        <a class="card-link" data-toggle="collapse" href="#collapsePilot${i}" role="button" aria-expanded="false" aria-controls="collapsePilot${i}">Pilotos</a>
                        <div class="collapse" id="collapsePilot${i}">
                            <div class="card card-body">
                                Pilotos de ${element.name}
                            </div>
                        </div>
                    </p>
                </div>
            </div>`;

            i = i+1;
    
    });

    starshipsCard.innerHTML =(cardTex);
    

    
}

function renderFilms(films)
{
    console.log(films.title)
   
}

function renderPilots(pilots)
{

}