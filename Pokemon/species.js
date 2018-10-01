//https://pokeapi.co/api/v2/pokemon-species/


function evolution(evolution)
{
    var evolves = evolution.chain.evolves_to;
    if( evolves != null)
    { 
        evolves.forEach(evolution => {
            console.log(evolution)
        })
    }

    
}

function evolutions(evolves_to)
{
     
        
    

}