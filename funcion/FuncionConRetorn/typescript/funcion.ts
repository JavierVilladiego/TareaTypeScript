function exponente() {//recibe el numero exponente de x
    var exponente: number = Number(prompt(">>Por favor diligenciar el numero exponente de X<<"));
    return exponente
}

function funcion(num: number) {//realiza el calculo para la funcion
    var resultado = Math.exp(num)
    return document.write(`La funcion con el exponente ${num} da como resultado ${resultado}`)

}


funcion(exponente())//invocamos la funcion