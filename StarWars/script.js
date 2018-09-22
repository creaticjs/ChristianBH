www = "https://swapi.co/api/";

var inputText = document.getElementById('inputUser');
var datos={};
var datosPerson = "";

function getPeliculas(){
    var peticion = new XMLHttpRequest();
    var datosTxt = "";
    var portadaPeliculas = [
        "https://bit.ly/2Qgrocj",
        "https://bit.ly/2O09x8d",
        "https://bit.ly/2wRvlvg",
        "https://bit.ly/2MeehW9",
        "https://bit.ly/2CBF6E6",
        "https://bit.ly/2wVQqp7",
        "https://bit.ly/2oRLOMx",
    ]
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) 
        {
            peliculas = JSON.parse(this.responseText)
            for(i=0; i<peliculas.results.length; i++)
            {
                datosTxt += "<div  class=\"row\"><div class=\"col-md-6 col-lg-6 text-center\">"+
                            "<img class=\"rounded-circle\" id=\"imgprofile\" style=\"width: 30%;\" src="+ portadaPeliculas[i] +" alt=\"\"></div>"+
                            "<div class=\"col-md-6 col-lg-6\">"+
                            "<p>"+ "<strong>Nombre: </strong>" + peliculas.results[i].title +"</p>"+
                            "<p>"+ "<strong>Episodio: </strong>" + peliculas.results[i].episode_id +"</p>"+
                            "<p>"+ "<strong>Director: </strong>" + peliculas.results[i].director +"</p>"+
                            "<p>"+ "<strong>Productor: </strong>" + peliculas.results[i].producer +"</p>"+
                            "</div></div><hr>" 

            }
            if(document.getElementById('films'))
            {
                document.getElementById('films').innerHTML = datosTxt;
            }
            
        }
    } 
    peticion.open('GET',www+'films/',true);
    peticion.send();
}

getPeliculas();
characters();


function characters(){
    var peticion  = new  XMLHttpRequest();
    var perfil = [
        "https://bit.ly/2x5RXIq",
        "https://bit.ly/2oXZ6qU",
        "https://bit.ly/2Nxc8JL",
        "https://bit.ly/2CDtq3w",
        "https://bit.ly/2MhMdRJ",
        "https://bit.ly/2Nx4r6o",
        "https://bit.ly/2O6XfLh",
        "https://bit.ly/2oWF4gd",
        "https://bit.ly/2QipvvL",
        "https://bit.ly/2Mj8min"
    ]
    
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            person = JSON.parse(this.responseText)

            for(i=0; i<person.results.length; i++)
            {
                datosPerson +="<div  class=\"row\"><div class=\"col-md-6 col-lg-6 text-center\">"+
                            "<img class=\"rounded-circle\" id=\"imgprofile\" style=\"width: 30%;\" src="+ perfil[i] +" alt=\"\"></div>"+
                            "<div class=\"col-md-6 col-lg-6\">"+
                            "<p>"+ "<strong>Nombre: </strong>" + person.results[i].name +"</p>"+
                            "<p>"+ "<strong>Altura: </strong>" + person.results[i].height +" m</p>"+
                            "<p>"+ "<strong>Masa: </strong>" + person.results[i].mass +" Kg</p>"+
                            "</div></div><hr>" 
            } 
            
        }
        if(document.getElementById('person'))
        {
            document.getElementById('person').innerHTML = datosPerson;
        }
        
    }
    peticion.open('GET',www+'people/',true);
    peticion.send();
}


var allData = [];
var planetas = [
    'https://bit.ly/2MVgwO8',
    'https://bit.ly/2pvc7Zb',
    'https://bit.ly/2DjitVf',
    'https://bit.ly/2NNAwqy',
    'https://bit.ly/2O0mjqj',
    'https://bit.ly/2DmeZRW',
    'https://bit.ly/2I3r2C9',
    'https://bit.ly/2PW5Dxs',
    'https://bit.ly/2xwZGjY',
    'https://bit.ly/2pbSPYq',
    'https://bit.ly/2pr05zX',
    'https://bit.ly/2pwdpmt',
    'https://bit.ly/2Nye3hS',
    'https://bit.ly/2DnDzSl',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];
var cardPlanet = "";

function getUrls(url)
{
    var httpR = new XMLHttpRequest();
    httpR.onload = function()
    {
        var i = 0;
        datos = JSON.parse(this.responseText)
        //console.log(datos)
        if(datos.next)
        {
            getUrls(datos.next)
            allData.push(datos.results)
        }
        else{
            allData.push(datos.results)
            allData.forEach(function(pages){
                pages.forEach(function(planets){
                cardPlanet += `<div class="col-sm-6 col-lg-4 mt-2">
                                    <div class="card">                                       
                                        <img class="card-img-top" style="height:550px;" src=${planetas[i]} alt="Card image cap">                       
                                        <div class="card-body">
                                            <h4 class="card-title">${planets.name}</h4>
                                            <p class="card-text">
                                            <p>Clima:${ planets.climate }</p>
                                            <p>Terreno:${ planets.terrain}</p>
                                            <p>Gravity:${ planets.gravity}</p>                                           
                                            </p>
                                            <a href="#!" class="btn btn-primary">Ver Detalles</a>
                                        </div>
                                    </div>
                                </div>`
                    i += 1;
                });
            });
            
        }
            /*urls.forEach(function(url){
                planetas.push(getPlanets(url));
            }
            );

            Promise.all(planetas)
            .then(function(data){
                console.log(data)
                data.forEach(function(page){
                    
                    page.forEach(function(element){
                        console.log(element.name)
                    });
                    
                });
                /* for(var i=0; i<data.length; i++)
                {

                }
                console.log(data) 

            }) 
        }*/
        if(document.getElementById('planetsCard'))
        {
            document.getElementById('planetsCard').innerHTML = cardPlanet;
        }
    }
    httpR.open('GET',url,true);
    httpR.send();

}
getUrls("https://swapi.co/api/planets/");

function getPlanets(url)
{
    return new Promise(function(resolve, reject)
    {
        var httpR = new XMLHttpRequest();
        httpR.onload = function()
        {
            response  = JSON.parse(this.responseText).results
            resolve(response)
        }
        httpR.onerror = function()
        {
            reject(Error('Hay un error'))
        }
        httpR.open('GET',url,true);
        httpR.send();
    }
    );
}