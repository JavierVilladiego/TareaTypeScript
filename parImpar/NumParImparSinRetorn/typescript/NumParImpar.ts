

function ParImpar() {//realiza el calculo para saber si es par o impar
    let numero: number = Number(prompt(">>Por favor diligenciar el numero que desea saber si es par o impar<<"));

    if (numero % 2 == 0) {
        document.write(`El numero  ${numero}  es PAR`)

    } else {
        document.write(`El numero ${numero} es IMPAR`)
    }


}


ParImpar()//invocamos la funcion