let numerosDeUsuario = [], resultado = 0, promedio = 0;

function agregar () {
    let dato =  parseInt(document.getElementById('numero').value);
    numerosDeUsuario.push(dato);
    console.log(numerosDeUsuario);
}

function calcularPromedio() {
    for (let contador = 0; contador < numerosDeUsuario.length; contador++) {
        console.log(resultado + 1);
        resultado += numerosDeUsuario[contador];
    }
    promedio = resultado / numerosDeUsuario.length;
    console.log(resultado);
    console.log(numerosDeUsuario.length);
    console.log(promedio);
}