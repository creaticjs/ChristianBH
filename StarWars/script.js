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
        document.getElementById('homeimg').style.display = 'none'
        if (this.readyState == 4 && this.status == 200) 
        {
            peliculas = JSON.parse(this.responseText)
           
            for(i=0; i<peliculas.results.length; i++)
            {
                console.log("pelicula"+(i+1)) 
                datosTxt += "<div  class=\"row\"><div class=\"col-md-6 col-lg-6 text-center\">"+
                            "<img class=\"rounded-circle\" id=\"imgprofile\" style=\"width: 30%;\" src="+ portadaPeliculas[i] +" alt=\"\"></div>"+
                            "<div class=\"col-md-6 col-lg-6\">"+
                            "<p>"+ "<strong>Nombre: </strong>" + peliculas.results[i].title +"</p>"+
                            "<p>"+ "<strong>Episodio: </strong>" + peliculas.results[i].episode_id +"</p>"+
                            "<p>"+ "<strong>Director: </strong>" + peliculas.results[i].director +"</p>"+
                            "<p>"+ "<strong>Productor: </strong>" + peliculas.results[i].producer +"</p>"+
                            "</div></div><hr>" 

            }
            document.getElementById('films').innerHTML = datosTxt;
        }
    } 
    peticion.open('GET',www+'films/',true);
    peticion.send();
}

function renderPerson(url){
    var peticion  = new  XMLHttpRequest();
    
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            person = JSON.parse(this.responseText)
            console.log(person.name)
            datosPerson += "<p>"+ "<strong>Nombre: </strong>" + person.name +"</p>"

        }
        document.getElementById('films').innerHTML = datosPerson;
    }
    peticion.open('GET',url,true);
    peticion.send();
}

function chatacters(){
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
    document.getElementById('homeimg').style.display = 'none'
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
        document.getElementById('films').innerHTML = datosPerson;
    }
    peticion.open('GET',www+'people/',true);
    peticion.send();
}


function getRequestGit(){
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText)
            console.log(datos);
            document.getElementById('title').innerHTML ="<title> Perfil | "+datos.login+"</title>"
            
            renderRepo(datos.repos_url);
        }
    }
    peticion.open('GET','https://api.github.com/users/'+inputText.value,true);
    peticion.send();
}

