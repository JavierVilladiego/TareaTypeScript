


function Primo() {//lee un numero y realiza el calculo para saber si es primo
    let numero: number = Number(prompt(">>Por favor diligenciar el numero que desea saber si es primo<<"));

    for (let i = 2; i < numero - 1; i++) {

        if (numero % i == 0) {
            document.write(`El numero ${numero} es primo`)
        } else {
            document.write(`El numero ${numero} no es primo`)
        }
        if (numero == 1) {
            document.write(`El numero ${numero} es invalido, ya que 1 no es primo. Por favor ingresar otro numero`)
        }



    }









    Primo()//invocamos la funcionn