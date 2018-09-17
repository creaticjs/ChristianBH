//Logica del ahorcado

//Llamados al document
var texto = document.getElementById("palabra_txt");

var boton = document.getElementById("enviar_btn");
boton.addEventListener("click",jugar);

var boton2 = document.getElementById("select_btn");
boton2.addEventListener("click",escogerPalabra);

var dibujo = document.getElementById("dibujo");
var imagen = document.getElementById("img");
var espacioLetras = document.getElementById("espacioletras");
var espacioVidas = document.getElementById("vidas");

var lienzo = dibujo.getContext("2d");
var color = "red";

var vidas = 6;
var palabra;
var nueva_palabra = "";
var solucion = [];


//Variables 
var palabras = [
    "hola",
    "mama",
    "papa",
    "carro",
    "bicicleta",
    "cañon",
    "poner",
    "cualquier",
    "cosas",
    "gato",
    "tigre",
    "nevera"
];


function jugar()
{
    compararPalabras();
}

function escogerPalabra()
{
    palabra = palabras[parseInt(Math.random()*(palabras.length-1))];
    for(i = 0; i < palabra.length; i++)
    {
        solucion[i] = " _ ";

    }
    nueva_palabra = solucion.join("");
    espacioLetras.innerHTML = nueva_palabra;
    espacioVidas.innerHTML = "Vidas " + vidas;
    imagen.src =  "img/" + String(vidas) + ".jpeg";
}

function compararPalabras()
{
    var letra = texto.value.toLowerCase();
    var estado = false;
    console.log(palabra);
    if(vidas >= 1)
    {
        for (i = 0; i < palabra.length; i++)
        {
            nueva_palabra[i] = palabra[i]; 
            if(palabra.charAt(i) == letra)
            {
                nueva_palabra[i] = palabra[i];
                solucion[i] = letra;   
                estado = true;                                      
            }
        } 
        if(!estado)
        {
            vidas -= 1;
            var directorio = "img/";
            imagen.src =  "img/" + String(vidas) + ".jpeg";
            console.log("Entre");
            
        }     
        nueva_palabra = solucion.join("");
        espacioLetras.innerHTML = nueva_palabra;
     
    }
    
    espacioVidas.innerHTML = "Vidas " + vidas;
       
}




/*
function dibujarAvatar()
{
    dibujaLinea(color,dibujo.width/2,dibujo.height/5+50,dibujo.width/2,dibujo.height/5+150);
    dibujaCirculo(color,dibujo.width/2,dibujo.height/5,50);

}

function dibujaLinea(color,x1, y1, x2, y2)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();  
}

function dibujaCirculo(color,x, y, radio)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.arc(x, y, radio, 0 , 2*Math.PI);
    lienzo.stroke();
    lienzo.closePath();  
}

function limpiarCanvas()
{
    lienzo.clearRect(0, 0, dibujo.width, dibujo.height);
    
}*/
