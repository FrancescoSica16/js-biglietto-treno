
const oneKmPrice = 0.21;
const under18Sales = 0.2;
const over65Sales = 0.4;


let numKm = parseInt ( prompt("Quanti Km vuoi percorrere?") );
let agePass = parseInt ( prompt("Quanti anni hai?") );

var priceKm = numKm * oneKmPrice ; 

if (agePass < 18){
    var finalSales = priceKm * under18Sales ;
    var finalPrice = priceKm - finalSales;
}
else if (agePass >= 65) {
    var finalSales = priceKm * over65Sales ;
    var finalPrice = priceKm - finalSales;
}

else {
    var finalPrice = priceKm;
}

document.getElementById("showed-price").innerHTML = finalPrice.toFixed(2);

