//https://pokeapi.co/api/v2/pokemon/
urlPokemons = [];
var pokeCard ='';
var contenido = document.getElementById('contenido');
var searchdiv = document.getElementById("searchdiv");
var search = document.getElementById("search");
search.addEventListener("keyup",searchPoke);
var i = 0;
var datos1 = [];
var color = [];
var AllPokemons=[];


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

poke = 'https://pokeapi.co/api/v2/pokemon/:id/'
$("#searchdiv").hide();

for (var i= 1; i<=500; i++)
{
    pokeUrl = poke.replace(":id",i) 
    urlPokemons.push(getPeticion(pokeUrl));
}

Promise.all(urlPokemons)
.then(functionDone)
function functionDone(dataBase)
{
    dataBase.forEach(data => {
        getPeticion(data.species.url)
        .then(function(specie){
            if(color.length < dataBase.length-1)
            {
                color.push(specie.color.name)
                renderTarget(data,specie)
            }
            else
            {
                AllPokemons = dataBase;
                $("#cargando").hide()
                contenido.innerHTML = pokeCard;
                $("#contenido").show()
                $("#searchdiv").show();
            }
        })
    });   
}

searchPoke();

function searchPoke()
{
    if($("#search").val()=="")
    {
        $("#contenidoSearch").hide()
        $("#contenido").show()
    }
    else{
        
        pokeCard = ''
        $("#contenido").hide();

        var query1 = Enumerable.From(AllPokemons)
                    .Where('!!($.name).toLowerCase().match(/^'+$("#search").val()+'/)')
                    .ToArray();
    
        query1.forEach(element => {
           
    
            getPeticion(element.species.url)
            .then(function(specie){    
                    color.push(specie.color.name)
                    renderTarget(element,specie)
                    $("#contenidoSearch").html(pokeCard);
                    $("#contenidoSearch").show(); 
            })    
        });
    }

}

function functionFail(ERR)
{
    console.log('Error')
}

function renderTarget(data, specie)
{
        var abil = '';
        var color = specie.color.name;
        var colorWord = 'black';
        var txt = specie.flavor_text_entries[3].flavor_text;

        if(color != 'white')
        {
            colorWord = 'white';
        }
    
        data.abilities.forEach(element =>{
            abil += `<li style="border-bottom: 2px solid ${color};" class="item"> ${element.ability.name} </li>`
        })
        
        pokeCard +=`<div class="col-lg-3 col-sm-6 mt-5">
            <div class="d-flex justify-content-center">
                <div class="tarjet-out">
                    <div id="tarjet-in" style="background-image: url(../Pokemon/img/${color}.jpg); color:${colorWord};">
                        <h4 class="text-center">${data.name.charAt(0).toUpperCase()+data.name.slice(1)}</h4>
                        <div class="img-bg">
                            <img id="poke-img" src=${data.sprites.front_default} alt="Card image">
                        </div>
                        <div class="justify-text" style="border-bottom: 2px solid ${color};">
                            <div class="d-flex justify-content-around">
                                <p style="border-bottom: 2px solid ${color};" class="item"> Peso: ${data.weight/10} kg <br><br></p>
                                <p style="border-bottom: 2px solid ${color};" class="item"> Expriencia: ${data.base_experience} <br><br></p> 
                                <p style="border-bottom: 2px solid ${color};" class="item"> Altura: ${data.height/10} m </p>  
                            </div>

                            <p style="border-bottom: 2px solid ${color};" class="item">Catergoria: ${specie.genera[4].genus} </p>
                            <p style="border-bottom: 2px solid ${color};" class="item">Habilidades:  <small> <br>
                                ${abil}
                            </small></p>

                            <p class="item" id=poke${data.id}on > ${txt.substring(0,50)}
                                <a onclick=hide(${data.id}) style="color:blue"> Leer mas.. <a/>
                            </p>

                            <p class="item" id=poke${data.id}off style="display: none;">${txt}
                                <a onclick=hide(${data.id}) style="color:blue"> Leer menos <a/>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>` 

} 

function hide(id)
{
    if(document.getElementById("poke"+id+"off").style.display == 'none')
    {
   
        $("#poke"+id+"off").show();
        $("#poke"+id+"on").hide();
    }
    else{
        $("#poke"+id+"on").show();
        $("#poke"+id+"off").hide();
    }
    
}
