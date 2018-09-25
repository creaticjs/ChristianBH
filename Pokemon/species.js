//https://pokeapi.co/api/v2/pokemon-species/


function species(specie)
{  
    specie.flavor_text_entries.forEach(text => {
       
        if(text.language.name == 'es')
        {
            console.log(text.flavor_text);     
        }  
        
    });
    peticion(specie.evolution_chain.url,evolution,functionFail)
}

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