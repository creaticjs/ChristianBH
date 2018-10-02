//https://pokeapi.co/api/v2/pokemon/
urlPokemons = [];
var pokeCard ='';
var contenido = document.getElementById('contenido');
var i = 0;
var datos1 = [];
var color = [];


function getPeticion(url){
    return new Promise(function(resolve,reject){
        $.ajax({
            type:"get",
            url:url,
            dataType:"json",
        })
        .done(function(data){
            resolve(data)
        })
        .fail(function(err){
            reject(err)
        })
    })
}


/* getPeticion("https://pokeapi.co/api/v2/pokemon/:id")
.then(functionDone) */
poke = 'https://pokeapi.co/api/v2/pokemon/:id/'

for (var i= 1; i<500; i++)
{
    pokeUrl = poke.replace(":id",i) 
    urlPokemons.push(getPeticion(pokeUrl));
}

Promise.all(urlPokemons)
.then(functionDone)

function functionDone(dataBase)
{
    console.log(dataBase)
    dataBase.forEach(data => {

        getPeticion(data.species.url)
        .then(function(specie){
            if(color.length < dataBase.length-1)
            {
                console.log(color.length)
                color.push(specie.color.name)
                renderTarget(data,specie.color.name)
            }
            else
            {
                $("#cargando").hide()
                contenido.innerHTML = pokeCard;
                $("#contenido").show()

                
            }
        })
    });
            /* 
            .then(function(data){
                console.log("CARGANDO...")
                //console.log(datos1.length)
                //console.log(urlPokemons.length)
                if(datos1.length < urlPokemons.length-1)
                {
                    datos1.push(data)
                }
                else
                {
                    console.log("diferente")
                    datos1.forEach(data => {

                        getPeticion(data.species.url)
                        .then(function(specie){
                            if(color.length < datos1.length-1)
                            {
                                console.log(color.length)
                                color.push(specie.color.name)
                                renderTarget(data,specie.color.name)
                            }
                            else
                            {
                                $("#cargando").hide()
                                contenido.innerHTML = pokeCard;
                                $("#contenido").show()
                            }
                        })
                    });
                }
            
            })
         */
    
        
    
 
}

/* Promise.all(urlPokemons)
    .then(function(urlPoke){
        urlPoke.forEach(poke => {

            getPeticion(poke)
            .then(function(data){
                console.log("CARGANDO...")
                console.log(datos1.length)
                console.log(urlPokemons.length)
                if(datos1.length < urlPokemons.length)
                {
                    datos1.push(data)
                }
                else
                {
                    console.log("diferente")
                    datos1.forEach(data => {

                        getPeticion(data.species.url)
                        .then(function(specie){
                            if(color.length < datos1.length)
                            {
                                console.log(color.length)
                                color.push(specie.color.name)
                                renderTarget(data,specie.color.name)
                            }
                            else
                            {
                                $("#cargando").hide()
                                contenido.innerHTML = pokeCard;
                                $("#contenido").show()
                            }
                        })
                    });
                }
            
            })
        })
    }) */
            /* 
            .then(function(data){
            }) */
            /* getPeticion(poke)
            .then(function(data){
                getPeticion(data.species.url)
                .then(function(specie){
                    
                    renderTarget(data,specie.color.name)        
    
                })
                
            }) */
            
        
        //getSpecies(datos1)

        
    
    /*  */


function getSpecies(data)
{
    console.log(data[0].name)
    /* data.forEach(poke =>{
        
        console.log(poke)
    }) */
}

function functionFail(ERR)
{
    console.log('Error')
}

function renderTarget(data, color)
{
   
        var abil = '';
        var color = color;
        var colorWord = 'black';

        if(color != 'white')
        {
            colorWord = 'white';
        }
    
        data.abilities.forEach(element =>{
            abil += `<li> ${element.ability.name} </li>`
        })
    
        pokeCard +=`<div class="col-lg-3 col-sm-6 mt-5">
            <div class="d-flex justify-content-center">
                <div id="tarjet-out">
                    <div id="tarjet-in" style="background-image: url(../img/${color}.jpg); color:${colorWord};">
                        <h4 class="text-center">${data.name}</h4>
                        <div class="img-bg">
                            <img id="poke-img" src=${data.sprites.front_default} alt="Card image">
                        </div>
                        <div class="justify-text">
                            <p>Peso: ${data.weight/10} kg</p>
                            
                            <p>Habilidades:  <small> <br>
                            ${abil}
                            </small></p>
                            <p class="card-text">This Pokémon's Speed is <br> doubled during strong sunlight..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    
        
    
} 