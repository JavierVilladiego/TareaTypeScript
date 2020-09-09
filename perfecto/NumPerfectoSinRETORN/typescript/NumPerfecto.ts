
function Perfecto() {//se lee el numero y se realiza el calculo para saber si es perfecto o imperfecto
    let numero: number = Number(prompt(">>Por favor diligenciar el numero que desea saber si es perfecto<<"));
    var cont: number = 0;
    for (let i = 1; i < numero; i++) {

        if (numero % i == 0) {
            cont = cont + i

        }

    }
    if (cont == numero) {
        document.write(`El numero ${numero} es PERFECTO`)
    } else {
        document.write(`El numero ${numero} es IMPERFECTO`)

    }

}

Perfecto()//invocamos la funcion