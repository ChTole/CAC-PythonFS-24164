// Estructuras repetitivas determinadas (for (desde,hasta,paso) - for...of - for...in)

let listaFor = document.querySelector('#listaFor');

for (let valor = 1; valor <= 5; valor++) { // valor es variable auxiliar o de control
    // 1, 2, 3, 4, 5
    let item = document.createElement('li');
    item.innerHTML = `Dato N° ${valor}`;
    item.className = 'itemFor';
    listaFor.appendChild(item);
}