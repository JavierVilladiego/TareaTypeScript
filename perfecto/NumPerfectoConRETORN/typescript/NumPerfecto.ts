function Numero() {//lee el numero
    let numero: number = Number(prompt(">>Por favor diligenciar el numero que desea saber si es perfecto<<"));
    return numero
}

function Perfecto(num: number) {//realiza el calculo para saber si es perfecto o imperfecto
    var cont: number = 0;
    for (let i = 1; i < num; i++) {

        if (num % i == 0) {
            cont = cont + i

        }

    }
    if (cont == num) {
        return document.write(`El numero ${num} es PERFECTO`)
    } else {
        return document.write(`El numero ${num} es IMPERFECTO`)

    }

}

Perfecto(Numero())//invocamos la funcion