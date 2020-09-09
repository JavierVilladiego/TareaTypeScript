"use strict";
function Numero() {
    var numero = Number(prompt(">>Por favor diligenciar el numero que desea saber si es perfecto<<"));
    return numero;
}
function Perfecto(num) {
    var cont = 0;
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            cont = cont + i;
        }
    }
    if (cont == num) {
        document.write("El numero " + num + " es PERFECTO");
    }
    else {
        document.write("El numero " + num + " es IMPERFECTO");
    }
}
Perfecto(Numero()); //invocamos la funcion
