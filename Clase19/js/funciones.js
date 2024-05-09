// Funciones
console.log('Comienzo');
// Fundamento y tiempos de una función
// Encapsular y reutilizar.
// 2 tiempos: 1° definición - 2° invocación

function saludar() { // definición
    let nombre = 'Christian';
    let frase = `Hola, soy ${nombre}`;
    console.log(frase);
}

saludar();

// Parámetros y retorno - ámbito de los parámetros
function saludarPersona(nombre) { // nombre es un parámetro
    let frase = `Hola, soy ${nombre}`;
    console.log(frase);
}

// LOS PARÁMETROS SON DE ÁMBITO LOCAL => NO EXISTEN FUERA DE LA FUNCIÓN
// console.log(nombre);
// console.log(frase);

saludarPersona('Ariel');
saludarPersona('Leia');
saludarPersona(); // undefined !!!

function retornarSaludo(nombre, comision) {
    return `Hola, soy ${nombre} de la comisión ${comision}`; // retorno
    // una vez ejecutado return, salgo de la función
    console.log('Luego del return');
}

retornarSaludo('Christian', 24164); // 'Hola, soy Christian de la comisión 24164'

let saludo = retornarSaludo('Christian', 24164) + ' de Codo a Codo.';
console.log(saludo);
console.log(retornarSaludo('Christian', 24164));

// Función como expresión
const discar = function llamarNro(numero) {
    console.log(`Llamando a ${numero}`);
}

// ¿Por qué en una constante?
// discar = false // para evitar pisar accidentalmente la definición

discar(1144446666);
// llamarNro(1188885555); // no definida, por ámbito local

// Función anónima - IIFE (Expresión de función inmediatamente invocada)
const marcarCelu = function(numero) { // anónima
    console.log(`Llamando a ${numero}`);
}

marcarCelu(1188887777);
// IIFE (Expresión de función inmediatamente invocada)
(function(nombre){
    // Código aislado
    console.log(`Hola, soy ${nombre}`);
})();

// Callback
// Ocurre cuando una función recibe como argumento otra función.
let lenguajes = ['Python', 'JavaScript', 'C++', 'Fortran'];

let recorrer = function(elemento, indice){
    console.log(`indice: ${indice} - elemento ${elemento}`);
}

lenguajes.forEach(recorrer); // recorrer es callback

// Función flecha
lenguajes.forEach((elemento, indice) => console.log(`indice: ${indice} - elemento ${elemento}`));

const cuadrado = numero => numero * numero; // el retorno está implícito

console.log(cuadrado(4));


console.log('Fin del algoritmo');