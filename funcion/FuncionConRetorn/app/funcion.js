"use strict";
function exponente() {
    var exponente = Number(prompt(">>Por favor diligenciar el numero exponente de X<<"));
    return exponente;
}
function funcion(num) {
    var resultado = Math.exp(num);
    return document.write("La funcion con el exponente " + num + " da como resultado " + resultado);
}
funcion(exponente()); //invocamos la funcion
