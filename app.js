// app.js

// Objeto con tasas de cambio desde 1 euro
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// Función: euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

// Función: dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

// Función: yenes a libras
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

// Exportamos todas las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

