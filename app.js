const lugar = require("./lugar/lugar.js");

const clima = require("./clima/clima.js");

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//console.log(argv.direccion);
let getInfo = async(direccion) => {

    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return "El clima en " + coors.direccion + "es de " + temp;
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });


// clima.getClima(9.92656, -84.654564)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });