let peso = 0, altura = 0, calculoUsuario = 0;

function calculo() {
    // Se obtienen los datos de los input
    peso = parseInt(document.getElementById('pesoUsuario').value);
    altura = parseInt(document.getElementById('alturaUsuario').value);

    // Se genera el calculo 
    altura = altura / 100;
    altura = Math.pow(altura,2);
    calculoUsuario = peso / altura;

    // Prueba de datos
    console.log(calculoUsuario);
    elementoHTML('.mesajeCalculo', `Tu MCI: ${calculoUsuario}`);
}

function elementoHTML (elemento, texto) {
    let element = document.querySelector(elemento);
    element.innerHTML = texto;
}