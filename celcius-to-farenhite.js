// function celToFaren(celcius) {
//     var farenhite = celcius * 1.8 + 32;
//     return farenhite;
// }
// var cTof = celToFaren(100);
// console.log(cTof);

// farenhite to celcius

function farenhiteToCelcius(farenhite) {
    var celcius = (farenhite - 32) * (5 / 9);
    return celcius;

}
var fToC = farenhiteToCelcius(78);
console.log('Fatenhite to Celcius', fToC);