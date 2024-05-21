//Definimos las ciudades
const ciudades = 'Ara Zer Tim Sib Ora Fag Lug Meh Dob Cra Rim Pit Buc Giu Urz Vas Ias Nea Hir Efo'.split(' ');

//Creamos la conexion entre las ciudades en un lista de adyacencia
const rutas = [
  ['Ara', 'Zer'],
  ['Ara', 'Tim'],
  ['Ara', 'Sib'],
  ['Zer', 'Ora'],
  ['Ora', 'Sib'],
  ['Tim', 'Lug'],
  ['Sib', 'Rim'],
  ['Sib', 'Fag'],
  ['Fag', 'Buc'],
  ['Lug', 'Meh'],
  ['Meh', 'Dob'],
  ['Dob', 'Cra'],
  ['Cra', 'Rim'],
  ['Cra', 'Pit'],
  ['Rim', 'Pit'],
  ['Pit', 'Buc'],
  ['Buc', 'Giu'],
  ['Buc', 'Urz'],
  ['Urz', 'Vas'],
  ['Vas', 'Ias'],
  ['Ias', 'Nea'],
  ['Urz', 'Hir'],
  ['Hir', 'Efo'],
];

//creamos la lista
const listaAdyacente = new Map();

//añadimos un nodo de las ciudad
function addNodo(ciudades) {
  listaAdyacente.set(ciudades, []);
}

function addBorde(origen, destino) {
  listaAdyacente.get(origen).push(destino);
  listaAdyacente.get(destino).push(origen);
}

//Creamos el Grafo
ciudades.forEach(addNodo);
rutas.forEach(ruta => addBorde(...ruta));

//imprimimos la lista de adyacencia
console.log(listaAdyacente)

//creamos la funcion de busqueda en anchura
function bfs(inicio) {
  //creamos una lista de visitados
  const visitado = new Set();
  const cola = [[inicio, []]];

  //creamos un bucle para recorrer la lista de adyacencia
  while (cola.length > 0) {
    //sacamos el primer elemento de la cola
    const [ciudad, ruta] = cola.shift();
    const destinos = listaAdyacente.get(ciudad);

    //Verificamos si destinos es un array vacio
    if (!Array.isArray(destinos)) {
      console.error('Error: Los destinos no son un array:', destinos);
      continue;
    }
    //si la ciudad no ha sido visitada, la marcamos como visitada y la añadimos
    for (const destino of destinos) {
      const nuevaRuta = [...ruta, destino]; // Creamos una nueva ruta en cada iteración
      //
      cola.push([destino, nuevaRuta]);

      if (destino === 'Buc') {
        console.log('Lo encontre');
        console.log('Ruta:', inicio, ' -> ', nuevaRuta.join(' -> '));
        return;
      }

      if (!visitado.has(destino)) {
        visitado.add(destino);
      }
    }
  }
}
bfs('Ara')
