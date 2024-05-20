const ciudades = 'Ara Zer Tim Sib Ora Fag Lug Meh Dob Cra Rim Pit Buc Giu Urz Vas Ias Nea Hir Efo'.split(' ');
const rutas = [
  ['Ara', 'Zer'],
  ['Ara', 'Tim'],
  ['Ara', 'Sib'],
  ['Zer', 'Ora'],
  ['Ora', 'Sib'],
  ['Zer', 'Ara'],
  ['Tim', 'Ara'],
  ['Tim', 'Lug'],
  ['Sib', 'Ora'],
  ['Sib', 'Ara'],
  ['Sib', 'Rim'],
  ['Sib', 'Fag'],
  ['Fag', 'Sib'],
  ['Fag', 'Buc']
  ['Lug', 'Tim'],
  ['Lug', 'Meh'],
  ['Meh', 'Lug'],
  ['Meh', 'Dob'],
  ['Dob', 'Meh'],
  ['Dob', 'Cra'],
  ['Cra', 'Dob'],
  ['Cra', 'Rim'],
  ['Cra', 'Pit']
  ['Rim', 'Cra'],
  ['Rim', 'Sib']
  ['Rim', 'Pit'],
  ['Pit', 'Rim'],
  ['Pit', 'Buc'],
  ['Pit', 'Cra'],
  ['Buc', 'Pit'],
  ['Buc', 'Fag'],
  ['Buc', 'Giu'],
  ['Giu', 'Buc'],
  ['Buc', 'Urz'],
  ['Urz', 'Buc'],
  ['Urz', 'Vas'],
  ['Vas', 'Urz'],
  ['Vas', 'Ias'],
  ['Ias', 'Vas'],
  ['Ias', 'Nea'],
  ['Ias', 'Nea'],
  ['Urz', 'Hir'],
  ['Hir', 'Urz'],
  ['Hir', 'Efo'],
  ['Efo', 'Hir']
];

const listaAdyacente = new Map();

function añadirNodo(ciudades) {
  listaAdyacente.set(ciudades, []);
}

function añadirBorde(origen, destino) {
  listaAdyacente.get(origen).push(destino);
  listaAdyacente.get(destino).push(origen);
}

//Creamos el Grafo
ciudades.forEach(añadirNodo);
rutas.forEach(rutas => añadirBorde(...rutas));

console.log(listaAdyacente)
