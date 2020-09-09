function Numero() {//lee el numero
    let numero: number = Number(prompt(">>Por favor diligenciar el numero que desea saber si es par o impar<<"));
    return numero
}

function ParImpar(num: number) {//realiza el calculo para saber si es par o impar
    if (num % 2 == 0) {
        return document.write(`El numero  ${num}  es PAR`)

    } else {
        return document.write(`El numero ${num} es IMPAR`)
    }


}


ParImpar(Numero())//invocamos la funcion