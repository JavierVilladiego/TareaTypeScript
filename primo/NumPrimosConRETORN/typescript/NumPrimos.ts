function Numero() {//lee el numero
    let numero: number = Number(prompt(">>Por favor diligenciar el numero que desea saber si es primo<<"));
    return numero
}

function Primo(num: number) {//realiza el calculo para saber si es primo
    let primo: boolean = true;
    for (let i = 2; i < num - 1; i++) {

        if (num % i == 0) {
            return primo = false;

        }

    }

    return primo


}
function respuesta(Num: number) { //Damos las respuesta

    if (Num == 1) {
        document.write(`El numero ${Num} es invalido, ya que 1 no es primo. Por favor ingresar otro numero`)
    }
    if (Primo(Num)) {
        document.write(`El numero ${Num} es primo`)
    } else {
        document.write(`El numero ${Num} no es primo`)
    }
}

respuesta(Numero())//invocamos la funcion