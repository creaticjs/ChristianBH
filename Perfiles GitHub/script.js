var inputText = document.getElementById('inputUser');
var datos={};
function getRequestGit(){
    inputText.style.innerHTML = 'null'
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText)
            console.log(datos);
            document.getElementById('title').innerHTML ="<title> Perfil | "+datos.login+"</title>"
            document.getElementById('imgprofile').setAttribute("src", datos.avatar_url)
            document.getElementById('nombre').innerHTML =datos.name
            document.getElementById('perfil').innerHTML = "<h1 class=\"font-weight-bold\" >Perfil de "+datos.name +"</h1>"
            document.getElementById('username').innerHTML =datos.login
            document.getElementById('bio').innerHTML =datos.bio
            document.getElementById('location').innerHTML =datos.location
            document.getElementById('icon').setAttribute("class","fas fa-map-marker-alt")

            renderRepo(datos.repos_url);
        }
    }
    peticion.open('GET','https://api.github.com/users/'+inputText.value,true);
    peticion.send();
}

function renderRepo(url)
{
    var data = [];
    var req = new XMLHttpRequest();
    var datosTxt = "";
    req.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
            
            for(i=0; i<data.length; i++)
            {
                datosTxt += "<hr>"+"<p>"+ "<strong>Nombre Repositorio: </strong>" + data[i].name +"</p>"+
                            "<p>"+ "<strong>Username: </strong>" + data[i].owner.login +"</p>"+
                            "<p>"+ "<strong>Descripcion: </strong>" + data[i].description +"</p>"+
                            "<p>"+ "<strong>Lenguaje: </strong>" + data[i].language +"</p>"
            }
            document.getElementById('repositorios').innerHTML = datosTxt;
        }
    }
    req.open('GET',url,true);
    req.send();
}
