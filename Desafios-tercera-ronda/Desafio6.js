let dato = 0, contador, resultado = 0;

function calculo() {
    dato = parseInt(document.getElementById('numero').value);

    for (contador = 1; contador <= 10; contador++) {
        resultado = dato * contador;
        document.write(`${dato} por ${contador} es = ${resultado}` + '<br>');
    }
}

// function mensaje(elemento, texto) {
//     let mensaje = document.querySelector(elemento);
//     mensaje.innerHTML = texto;
// }