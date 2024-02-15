let dolar = 0, resultado = 0;

function conversion() {
    dolar = parseFloat(document.getElementById('numero').value);
    resultado = dolar * 17.08;

    console.log(resultado);
}