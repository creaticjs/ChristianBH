//https://pokeapi.co/api/v2/pokemon/

function peticion(){
    $.ajax({
        type:"get",
        url:"https://pokeapi.co/api/v2/pokemon/",
        dataType:"json",
    })
    .done(function(data){
        var pokemons = data.results;
        pokemons.forEach(function(pokemon){

            console.log(pokemon);
            
        });
    })
    .fail(function(){
        console.log('Error')
    })
}