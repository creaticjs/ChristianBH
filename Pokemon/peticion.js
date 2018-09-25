//https://pokeapi.co/api/v2/pokemon/
urlPokemons = [];

function peticion(url,functionDone, functionFail){
    $.ajax({
        type:"get",
        url:url,
        dataType:"json",
    })
    .done(function(data){
        functionDone(data)
    })
    .fail(function(err){
        functionFail(err)
    })
}

peticion("https://pokeapi.cO/api/v2/pokemon/",functionDone,functionFail);

function functionDone(data)
{
    var pokemons = data.results;
    pokemons.forEach(function(pokemon){
        urlPokemons.push(pokemon.url);
    });

    peticion(urlPokemons[0], getDataPokemon, functionFail)

    /* urlPokemons.forEach(url => {

        peticion(url, getDataPokemon, functionFail)
        
    }); */
}
function getDataPokemon(data)
{
    var dataPokeTxt = ''

    dataPokeTxt = ''
    //document.getElementById('contenido').innerHTML = dataPokeTxt
    console.log(data.name)
    console.log(data.weight)
    console.log(data.sprites.front_default)
    data.abilities.forEach(abiliti => {
        console.log(abiliti.ability.name)
    })

    peticion(data.species.url,species,functionFail)
    
    
}

function functionFail(ERR)
{
    console.log('Error')
}

function renderTarget(data)
{

} 