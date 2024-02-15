let radio = 0, resultadoA = 0, resultadoP = 0;

function calculo() {
    radio = parseFloat(document.getElementById('radio').value);

    resultadoA = 3.14 * Math.pow(radio, 2);
    resultadoP = (2 * 3.14) * radio;

    mensaje('#resultado', `Tu area es de ${resultadoA} y tu perimetro es ${resultadoP}`);
}

function mensaje(elemento, texto) {
    dato = document.querySelector(elemento);
    dato.innerHTML = texto;
}