

function funcion() {//realiza el calculo para la funcion
    var exponente: number = Number(prompt(">>Por favor diligenciar el numero exponente de X<<"));
    var resultado = Math.exp(exponente)
    document.write(`La funcion con el exponente ${exponente} da como resultado ${resultado}`)

}


funcion()//invocamos la funcion