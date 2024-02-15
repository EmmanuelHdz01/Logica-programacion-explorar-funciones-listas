let altura = 0, anchura = 0, resultadoA = 0, resultadoP = 0, dato = 0;

function calcular() {
    altura = parseFloat(document.getElementById('altura').value);
    anchura = parseFloat(document.getElementById('ancho').value);

    resultadoA = altura * anchura;
    console.log(resultadoA);
    resultadoP = (2 * altura) + (2 * anchura);
    console.log(resultadoP);

    resultado('#resultado', `Tu area es ${resultadoA} y tu perimetro es ${resultadoP}`);
}

function resultado(elemento, texto) {
    dato = document.querySelector(elemento);
    dato.innerHTML = texto;
}