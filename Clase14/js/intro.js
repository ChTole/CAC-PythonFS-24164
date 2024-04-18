// Comentario en línea

/*
Comentario 
de más
de una
línea
*/

// 1-Tipos de datos

// Primitivos
// Boolean, Number, BigInt, String, Symbol y undefined

// Complejos
// Array - arreglo (vector) -> Python == lista
// Object - objeto (atributos y métodos) -> Python == diccionario

// EJECUCIÓN EN CONSOLA DEL NAVEGADOR
typeof "Cadena de texto"
typeof "123"
typeof 123
typeof 3.14 
typeof true

// 2-Debilmente tipado

typeof "123" + 1 // "1231"
typeof "123" - 1 // 122

console.log("Intro a JS - Desde un script externo")

// Ver docu sobre el DOM
// https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction

// Propiedades de JS: 
// - Interpretado
// - Ejecuta del lado del cliente
// - Alto nivel

// Accedo a contenido del body 
// console.log(document.querySelector('h1'));

// Variables
// Primero declaro, luego asigno.

// Forma discontinua, que no vamos a usar.
var miVariable; // declaración - una sola vez
// var miVariable = new Number; // declarar nombre y tipo
console.log(miVariable); // undefined

miVariable = 5; // asignación - tipado es dinámico
console.log(miVariable, "->", typeof miVariable); // 5 -> number

miVariable = "cinco"; // tipado dinámico
console.log(miVariable, "->", typeof miVariable); // cinco -> string

// ¿por qué no usamos más "var"?
var miVariable = false;
console.log(miVariable, "->", typeof miVariable);
// PERMITE DECLARAR LA MISMA VARIABLE MÁS DE UNA VEZ!!! GRAVE!!!

// Por eso se comenzó a implementar "let"

// *********************************************
// EJEMPLO DE TIPADO DINÁMICO
let nuevaVariable = true; // declaro y asigno
// let miNumero = new Number; //
// *********************************************

miNumero = "Hola mundo";
console.log(nuevaVariable, '->', typeof nuevaVariable);

// let nuevaVariable = "una cadena"; // Uncaught SyntaxError: Identifier 'nuevaVariable' has already been declared
// console.log(nuevaVariable);

nuevaVariable = "una cadena"; // 
console.log(nuevaVariable);

// Constantes
const valorFijo = "Nadie me modifica!";
console.log(valorFijo, typeof valorFijo);

// valorFijo = "false"; // Uncaught TypeError: Assignment to constant variable.
console.log(valorFijo, typeof valorFijo);

// Booleanos: true - false

// Operadores de comparación
// < Menor // > Mayor // >=  // <= // == igualdad // != diferencia
let comparacion = 5 > 4; // expresión de comparación -> true
console.log(comparacion, typeof comparacion);

comparacion = "5" == 5; // comparo valores literales
console.log(comparacion, typeof comparacion);

// Comparación e identidad
comparacion = "5" === 5; // comparo valores y tipos --> identidad
console.log(comparacion, typeof comparacion);

comparacion = "5" !== 5; // comparo valores y tipos --> identidad
console.log(comparacion, typeof comparacion);
