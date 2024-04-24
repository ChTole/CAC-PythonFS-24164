console.log('Comienzo');
// switch...case

// Grupos sanguineos: 0 - A - B - AB // Factor: Rh+ - Rh-
let grupo = "AB";

switch (grupo) {
    case "0":
    case "0+":
    case "0-":
        console.log('Dador universal.');
        break;
    case "A":
        console.log('Grupo A');
        break;
    case "B":
        console.log('Grupo B');
        break;
    case "AB":
        console.log('Receptor universal.');
        break;
    default:
        console.log('Grupo desconocido.');
}

console.log('Fin del algoritmo.');