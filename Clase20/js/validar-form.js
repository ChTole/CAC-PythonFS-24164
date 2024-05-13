// Validación de formulario
console.log('Comienzo');

// 2° validación
function validarCampos() {
    let nombre = document.querySelector('#nombre').value;
    let edad = document.querySelector('#edad').value;
    // console.log(nombre, typeof nombre); // string
    // console.log(edad, typeof edad); // string

    // expresión regular: permite buscar patrones dentro de una cadena
    // sólo letras, algún espacio: "Ariel", "Christian Ariel", "aRiEl"
    let soloPalabras = /^[a-z\s]+$/i;
    let pruebaEmail = /^[a-zA-Z\d\._-]*@[a-zA-Z\d_-]*\.[a-zA-Z]{3}(\.[a-zA-Z]{2})*$/;
    // console.log(soloPalabras instanceof RegExp); // true
    // console.log(soloPalabras.test(' '));
    // console.log(soloPalabras.test('ArIEl'));
    // console.log(soloPalabras.test('Christian 123'));
    // console.log(soloPalabras.test('Christian Toledo'));
    // console.log(soloPalabras.test('123'));

    let datosValidos = true; // bandera o hipótesis
    let msjError = 'Datos inválidos: ';
    if (nombre === '' || !soloPalabras.test(nombre)) {
        datosValidos = false;
        msjError += ' nombre';
    }
    
    if (edad === '' || !Number.isInteger(Number(edad))) {
        datosValidos = false;
        msjError += ' edad';
    }

    let mensaje = document.querySelector('#rtaForm');
    if (datosValidos) {
        mensaje.innerHTML = 'Validación correcta!'
    } else {
        mensaje.innerHTML = msjError
    }
}

// 1° Capturo el formulario y escucho el evento
const formulario = document.querySelector('#formNombreEdad');
formulario.addEventListener('submit', evento => {
    // console.log('presionado!');
    validarCampos();
    evento.preventDefault();
});


console.log('Fin del algoritmo (?)');
// Aclaración: los "testigos" al principio y al fin son para ayudar a comprender el comportamiento asincrónico del script.