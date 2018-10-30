var data = require('./caida_libre');
const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

console.log("Aqui podras calcular el tiempo y velocidad de un objeto en caida libre. ")

rl.question('Ingrese la altura del edificio en metros: ', (h) => {

    var t = data.t(h,data.g).toFixed(2);
    console.log("El tiempo de caida es: "+t+" s");
    var v = data.v(t,data.g).toFixed(2);
    console.log("la velocidad final es: " + v +" m/s");
    rl.close();
   
}); 

//data.h_max(1,2);