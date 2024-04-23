// NOMBRES DE VARIABLES (ver palabras reservadas)
// - Pueden comenzar con una letra, un guión bajo ( _ ) o un signo de dólar ( $ ). (sintaxis y convención)
// - Los siguientes caracteres también pueden ser dígitos ( 0 - 9 ), nunca al principio (sintaxis). 
// - JavaScript distingue entre mayúsculas y minúsculas (es case-sensitive).
// - Cuando contienen más de una palabra se utiliza la notación camelCase (convención).
// - Deben ser referenciales de su contenido (convención).
let _miVariable; // _MIvAriable
let otraVariable; 
let $variable;
let varNro4;

// OPERADORES
// Aritméticos: + , - , * , / , ** , %
// Precedencia es igual que en las matemáticas que conocemos
let operacionMatematica = 5 ** 3 * 2 - 100 + 5 % 2 - 4
//                         125 * 2   - 100 +   1  -  4
//                          250   - 100  + 1  - 4  = 147
console.log(operacionMatematica);

console.log(5 * 3 * 4); // 60
console.log(3 * 4 * 5); // 60

// De comparación: < , > , <= , >= , == , != (devuelven booleanos)
let mayorEdad = 43 > 18; // true
let operacion1 = 4 * 2;
let operacion2 = 15 / 3;
let combinacionOperadores = operacion1 > operacion2; //  1ro se resuelven los aritméticos, luego la comparación
console.log(combinacionOperadores);

// Identidad === , !==
let esIgual = "4" == 4; // true
esIgual = "4" === 4; // false
// alert(esIgual);

console.log('****** LÓGICOS *******')
// Lógicos: && (conjunción ó «y»), || (disyunción u «ó») y ! (negación -unario-) también devuelven booleanos.
// Conjunción
// 1ra proposición: Si el día está lindo,       true    false   true
// 2da proposición: «Y» tenemos tiempo,         true    true    false
// Resultado:       salimos a caminar.          true    false   false
let varBool = true && false;
console.log(varBool);
console.log(false && false); // NO ES UNA NEGACIÓN!!! // false
// Conjunción: sólo obtengo true si ambas proposiciones son true.

// Disyunción
// 1ra proposición: Si vos estás en el shopping,            true    false   false
// 2da proposición: «Ó» si yo estoy en el shopping,         false   true    false
// Resultado:       alguno le compra el regalo a mamá.      true    true    false
console.log(true || true); // alt 124 // true
console.log(true || false); // true
console.log(false || false); // false
// Disyunción: con que una proposición sea true, obtengo true.

// Negación
console.log(!true); // false
console.log(!false); // true

// COMBINACIÓN DE OPERACIONES
// PRECEDENCIA: 
// 1ro: aritméticas
// 2do: de comparación o identidad
// 3ro: lógicas  -->   1° Negación / 2° Conjunción / 3° Disyunción
let granComparacion = 5 > 2 ** 2 + 15 % 2 && !false || "hola" == "HOLA"; 
//                    5 >  4 + 1
//                      false             &&  !false || false
//                       false            &&     true  ||  false
//                                  false ||  false   = false
console.log(granComparacion);

console.log('comparo si h es mayor a H', "h" > "H");

// CUADROS DE DIÁLOGO (alert, prompt, confirm)
// No son de uso habitual, pero en éste punto nos sirven para interactuar con nuestra página, sitio o aplicación.
// Estos mensajes automatizados tienen dos inconvenientes:
// No hay una forma estándar de cambiar su aspecto con CSS.
// Dependen de la configuración regional del navegador, lo que significa que puedes tener una página en un idioma pero un mensaje de error en otro idioma.
// let ingresoVentana = prompt('Ingrese un dato:');
// console.log(ingresoVentana, typeof ingresoVentana);
let num1 = prompt('Ingrese un número:');
let num2 = prompt('Ingrese otro número:');
let resultado = Number(num1) + Number(num2)
// Formateo de cadenas
alert(`La suma es: ${resultado}`)  // alt 96 `

