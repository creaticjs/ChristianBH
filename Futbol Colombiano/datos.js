var dataEquipos = [
    {
        nombre : "America",
        estadio : "Pascual Guerrero",
        logo : "https://bit.ly/2NCYDoF",
        dt : "Halorld Lozano",
        titulos : "13",
        ciudad : "Cali",
        fundacion : "13 Febrero 1927",
        categoria: "A",
        jugados: 6,
        ganados: 1,
        empatados: 2,
        perdidos: 3,
        puntos: 5,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc;}
         
    },
    {
        nombre : "Nacional",
        estadio : "Atanacio Girardot",
        logo : "https://bit.ly/2orfDTF",
        dt : "Jorge Almirón",
        titulos : "16",
        ciudad : "Medellin",
        fundacion : "30 de abril de 1947",
        categoria: "A",
        jugados: 6,
        ganados: 3,
        empatados: 2,
        perdidos: 1,
        puntos: 11,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Pasto",
        estadio : "Libertad",
        logo : "https://bit.ly/2PW7T8W",
        dt : " Flabio Torres",
        titulos : "1",
        ciudad : "Pasto",
        fundacion : "12 de octubre de 1949",
        categoria: "A",
        jugados: 6,
        ganados: 1,
        empatados: 1,
        perdidos: 4,
        puntos: 4,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Deportes Tolima",
        estadio : "Manuel Murillo Toro",
        logo : "https://bit.ly/2MJjCty",
        dt : "Alberto Gamero",
        titulos : "2",
        ciudad : "Ibagué, Colombia",
        fundacion : "18 de diciembre de 1954",
        categoria: "A",
        jugados: 6,
        ganados: 4,
        empatados: 1,
        perdidos: 1,
        puntos: 13,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Deportivo Cali",
        estadio : "Palma Seca",
        logo : "https://bit.ly/2wtBvSK",
        dt : "Gerardo Pelusso",
        titulos : "9",
        ciudad : "Palmira, Valle del Cauca",
        fundacion : "23 de noviembre de 1912",
        categoria: "A",
        jugados: 6,
        ganados: 2,
        empatados: 3,
        perdidos: 1,
        puntos: 9,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Millonarios",
        estadio : "	Nemesio Camacho El Campin",
        logo : "https://bit.ly/2C6IHK5",
        dt : "Miguel Ángel Russo",
        titulos : "15",
        ciudad : "Bogotá DC",
        fundacion : "18 de junio de 1946",
        categoria: "A",
        jugados: 6,
        ganados: 2,
        empatados: 3,
        perdidos: 1,
        puntos: 9,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Santa Fé S.A.",
        estadio : "	Nemesio Camacho El Campin",
        logo : "https://bit.ly/2CeIWmu",
        dt : "Guillermo Sanguinetti",
        titulos : "15",
        ciudad : "Bogotá DC",
        fundacion : "28 de febrero de 1941",
        categoria: "A",
        jugados: 6,
        ganados: 1,
        empatados: 4,
        perdidos: 1,
        puntos: 7,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Atlético Junior",
        estadio : "	Metropolitano Roberto Meléndez",
        logo : "https://bit.ly/2LMGZwM",
        dt : "Julio Comesaña",
        titulos : "9",
        ciudad : "Barranquilla, Atlántico, Colombia",
        fundacion : "27 de agosto de 1924",
        categoria: "A",
        jugados: 6,
        ganados: 4,
        empatados: 1,
        perdidos: 1,
        puntos: 13,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Boyacá Chicó",
        estadio : "La Independencia",
        logo : "https://bit.ly/2PVa3Wf",
        dt : "Jhon Jaime Gómez",
        titulos : "1",
        ciudad : "Tunja, Boyacá, Colombia",
        fundacion : "26 de marzo de 2002",
        categoria: "A",
        jugados: 6,
        ganados: 1,
        empatados: 2,
        perdidos: 3,
        puntos: 5,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Atletico Huila",
        estadio : "Guillermo Plazas Alcid",
        logo : "https://bit.ly/2NHyANe",
        dt : "Néstor Craviotto",
        titulos : "1",
        ciudad : "Neiva, Colombia",
        fundacion : "29 de noviembre de 1990",
        categoria: "A",
        jugados: 6,
        ganados: 0,
        empatados: 0,
        perdidos: 0,
        puntos: 0,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Atlético Bucaramanga",
        estadio : "Alfonso López",
        logo : "https://bit.ly/2C62ide",
        dt : "Flabio Torres",
        titulos : "2",
        ciudad : "Bucaramanga, Colombia",
        fundacion : "11 de mayo de 1948",
        categoria: "A",
        jugados: 6,
        ganados: 0,
        empatados: 2,
        perdidos: 4,
        puntos: 2,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Alianza Petrolera",
        estadio : "Daniel Villa Zapata",
        logo : "https://bit.ly/2ou5LJ2",
        dt : "Juan Cruz Real",
        titulos : "1",
        ciudad : "Barrancabermeja, Santander, Colombia",
        fundacion : "24 de octubre de 1991",
        categoria: "A",
        jugados: 6,
        ganados: 3,
        empatados: 0,
        perdidos: 3,
        puntos: 9,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Águilas Doradas ",
        estadio : "Alberto Grisales",
        logo : "https://bit.ly/2LNmtwa",
        dt : "Jorge Luis Bernal",
        titulos : "1",
        ciudad : "Rionegro, Antioquia, Colombia",
        fundacion : "16 de julio de 2008",
        categoria: "B",
        jugados: 6,
        ganados: 0,
        empatados: 0,
        perdidos: 0,
        puntos: 0,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Deportivo Independiente Medellin",
        estadio : "Atanasio Girardot",
        logo : "https://bit.ly/2N0HGrh",
        dt : "Octavio Zambrano",
        titulos : "6",
        ciudad : "Medellín, Colombia",
        fundacion : "14 de noviembre de 1913",
        categoria: "A",
        jugados: 6,
        ganados: 3,
        empatados: 1,
        perdidos: 2,
        puntos: 10,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Leones Futbol Club",
        estadio : "Metropolitano Ciudad de Itagüí",
        logo : "https://bit.ly/2osVeO8",
        dt : "Luis Amaranto Perea",
        titulos : "0",
        ciudad : "Itagüí, Antioquia, Colombia",
        fundacion : "15 de febrero de 1957",
        categoria: "A",
        jugados: 6,
        ganados: 0,
        empatados: 1,
        perdidos: 5,
        puntos: 1,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Once Caldas",
        estadio : "Palogrande",
        logo : "https://bit.ly/2PXefVI",
        dt : "Hubert Bodhert",
        titulos : "1",
        ciudad : "Manizales, Caldas, Colombia",
        fundacion : "17 de marzo de 1947 ",
        categoria: "A",
        jugados: 6,
        ganados: 5,
        empatados: 1,
        perdidos: 0,
        puntos: 16,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Patriotas",
        estadio : "La Independencia",
        logo : "https://bit.ly/2C8NxGE",
        dt : "Diego Corredor",
        titulos : "1",
        ciudad : "Tunja, Colombia",
        fundacion : "18 de febrero de 2003",
        categoria: "A",
        jugados: 6,
        ganados: 1,
        empatados: 3,
        perdidos: 2,
        puntos: 6,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Club Deportivo La Equidad",
        estadio : "Metropolitano de Techo",
        logo : "https://bit.ly/2MH2G73",
        dt : "Luis Fernando Suárez",
        titulos : "1",
        ciudad : "Bogotá, Colombia",
        fundacion : "1 de diciembre de 1982 ",
        categoria: "A",
        jugados: 6,
        ganados: 0,
        empatados: 0,
        perdidos: 0,
        puntos: 18,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Envigado Fútbol Club",
        estadio : "	Polideportivo Sur",
        logo : "https://bit.ly/2NAKSqt",
        dt : "Rubén Bedoya",
        titulos : "0",
        ciudad : "Envigado, Antioquia, Colombia",
        fundacion : "14 de octubre de 1989",
        categoria: "A",
        jugados: 6,
        ganados: 0,
        empatados: 3,
        perdidos: 3,
        puntos: 3,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Cúcuta Deportivo",
        estadio : "	Polideportivo Sur",
        logo : "https://bit.ly/2Q1Z2SY",
        dt : "Rubén Bedoya",
        titulos : "0",
        ciudad : "Envigado, Antioquia, Colombia",
        fundacion : "14 de octubre de 1989",
        categoria: "B",
        jugados: 22,
        ganados: 16,
        empatados: 6,
        perdidos: 0,
        puntos: 54,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Union Magdalena",
        estadio : "	Polideportivo Sur",
        logo : "https://bit.ly/2Q5cF4b",
        dt : "Rubén Bedoya",
        titulos : "0",
        ciudad : "Envigado, Antioquia, Colombia",
        fundacion : "14 de octubre de 1989",
        categoria: "B",
        jugados: 21,
        ganados: 12,
        empatados: 5,
        perdidos: 4,
        puntos: 41,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Deportivo Pereira",
        estadio : "",
        logo : "https://bit.ly/2NN68cv",
        dt : "",
        titulos : "0",
        ciudad : "",
        fundacion : "",
        categoria: "B",
        jugados: 22,
        ganados: 11,
        empatados: 5,
        perdidos: 6,
        puntos: 38,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Real cartagena",
        estadio : "",
        logo : "https://bit.ly/2oD9xjs",
        dt : "",
        titulos : "0",
        ciudad : "",
        fundacion : "",
        categoria: "B",
        jugados: 22,
        ganados: 9,
        empatados: 5,
        perdidos: 8,
        puntos: 32,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Universitario Popayán",
        estadio : "Ciro López",
        logo : "https://bit.ly/2wBNdL8",
        dt : "",
        titulos : "0",
        ciudad : "Popáyan - Cauca",
        fundacion : "",
        categoria: "B",
        jugados: 22,
        ganados: 7,
        empatados: 8,
        perdidos: 7,
        puntos: 29,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Valledupar",
        estadio : "",
        logo : "https://bit.ly/2MM6Udx",
        dt : "",
        titulos : "0",
        ciudad : "",
        fundacion : "",
        categoria: "B",
        jugados: 22,
        ganados: 7,
        empatados: 8,
        perdidos: 7,
        puntos: 29,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Cortuluá",
        estadio : "",
        logo : "https://bit.ly/2LT6z3j",
        dt : "",
        titulos : "0",
        ciudad : "",
        fundacion : "",
        categoria: "B",
        jugados: 21,
        ganados: 7,
        empatados: 7,
        perdidos: 7,
        puntos: 28,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Tigres",
        estadio : "",
        logo : "https://bit.ly/2PzrECi",
        dt : "",
        titulos : "0",
        ciudad : "",
        fundacion : "",
        categoria: "B",
        jugados: 21,
        ganados: 5,
        empatados: 12,
        perdidos: 14,
        puntos: 27,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Deportes Quindio",
        estadio : "",
        logo : "https://bit.ly/2NcBoEZ",
        dt : "",
        titulos : "0",
        ciudad : "",
        fundacion : "",
        categoria: "B",
        jugados: 22,
        ganados: 6,
        empatados: 8,
        perdidos: 8,
        puntos: 27,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
    {
        nombre : "Orsomarso",
        estadio : "",
        logo : "https://bit.ly/2Cg3zP6",
        dt : "",
        titulos : "0",
        ciudad : "",
        fundacion : "",
        categoria: "B",
        jugados: 0,
        ganados: 0,
        empatados: 0,
        perdidos: 0,
        puntos: 0,
        gf: 0,
        gc: 0,
        diferencia : function(){return this.gf - this.gc}
         
    },
]; 

class Equipo{
    
    constructor(nombre,estadio,logo,dt,titulos,ciudad,fundacion,categoria,jugados,ganados,empatados,perdidos,puntos,gf,gc){
        this.nombre=nombre,
        this.estadio=estadio,
        this.logo=logo,
        this.dt=dt,
        this.titulos=titulos,
        this.ciudad=ciudad,
        this.fundacion=fundacion,
        this.categoria=categoria,
        this.jugados=jugados,
        this.ganados=ganados,
        this.empatados=empatados,
        this.perdidos=perdidos,
        this.puntos=puntos,
        this.gf=gf,
        this.gc=gc
    }

    diferencia(){
        return this.gf - this.gc
    }
}


var selEquipos = document.getElementById('equipos');
var nombreEquipo = document.getElementById('nombre');
var imgEquipo = document.getElementById('imgEquipo');
var estadio  = document.getElementById('estadio');
var ciudad = document.getElementById('ciudad');
var dt = document.getElementById('dt');
var titulos = document.getElementById('titulos');
var fundacion = document.getElementById('fundacion');
var botonA = document.getElementById("catA_btn");
botonA.addEventListener("click",function(){vertabla(PosicionesA)});
var botonB = document.getElementById("catB_btn");
botonB.addEventListener("click",function(){vertabla(PosicionesB)});
var home = document.getElementById('home')



var divTablas =  document.getElementById('tablas')
var divEquipos = document.getElementById('equipos')


var start = false;

var tabla = document.getElementById('tabla');

home.setAttribute('href','"www.facebook.com"')

var categoriaA = dataEquipos.filter(function(equipo){
    return equipo.categoria == "A";
})

var categoriaB = dataEquipos.filter(function(equipo){
    return equipo.categoria == "B";
})

var PosicionesA = categoriaA.sort(function(a,b){
    return -(a.puntos - b.puntos);
})
var PosicionesB = categoriaB.sort(function(a,b){
    return -(a.puntos - b.puntos);
})

var America = new Equipo('America','Pascual Guerrero',"https://bit.ly/2NCYDoF","Halorld Lozano", "13","Cali","13 Febrero 1927","A",6,1,2,3,5,0,0)

function verEquipo(PosCat)
{
    divEquipos.style.display = 'none'
    divTablas.style.display = 'block'
}

function vertabla(PosCat)
{
    var auxTabla = "";
    var auxSelect = "<option selected=\"\">Seleccionar Equipo</option>";
    
    
    a=1;
    PosCat.forEach(function(equipo){
        auxTabla += "<tr><th scope=\"row\">"+a+"</th>"+
                    "<td>"+ equipo.nombre+"</td>"+
                    "<td>"+
                                "<td><td>"+equipo.jugados+"</td>"+
                                "<td>"+equipo.ganados+"</td>"+
                                "<td>"+equipo.empatados+"</td>"+
                                "<td>"+equipo.perdidos+"</td>"+
                                "<td>"+equipo.gf+"</td>"+
                                "<td>"+equipo.gc+"</td>"+
                                "<td>"+equipo.diferencia()+"</td>"+
                                "<td>"+equipo.puntos+"</td>"+
                            "</td>"+
                        "</td>"+
                    "</tr>"; 
        a += 1;
        auxSelect += "<option value="+equipo.nombre.toLowerCase()+">"+equipo.nombre+"</option>"
    })
    

    selEquipos.onchange = function(){

        //console.log("Selecciono  "+ this.value);
        //document.getElementById('nombre').innerHTML = this.value;
        nombreEquipo.innerHTML = this.options[this.selectedIndex].text;
        estadio.innerHTML = "Estadio: " + PosCat[this.selectedIndex-1].estadio;
        ciudad.innerHTML = "Ciudad: " + PosCat[this.selectedIndex-1].ciudad;
        imgEquipo.setAttribute('src',PosCat[this.selectedIndex-1].logo)
    
        dt.innerHTML = "Director técnico: " + PosCat[this.selectedIndex-1].dt;
        titulos.innerHTML = "Titulos: " + PosCat[this.selectedIndex-1].titulos;
        fundacion.innerHTML = "Fundacion: " + PosCat[this.selectedIndex-1].fundacion;
    
        console.log(this.selectedIndex);
    
    }
    tabla.innerHTML = auxTabla;
    selEquipos.innerHTML = auxSelect;
}

var recorrer = function (item) {
    console.log(item.nombre)
}




