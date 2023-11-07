//Array con ejemplos
let DBZ = [];

function cargaDBZ() {
  let peleador = prompt("Ingrese un item o quit para terminar")
    .toLocaleLowerCase()
    .trim();

  while (peleador != "quit") {
    DBZ.push(peleador);
    peleador = prompt("Ingrese un item o quit para terminar")
      .toLocaleLowerCase()
      .trim();
  }
}

function borrarDBZ() {
  let borrar = prompt("Ingrese un peleador para borrar")
    .toLocaleLowerCase()
    .trim();

  for (let index = 0; index < DBZ.length; index++) {
    if (DBZ[index] === borrar) {
      DBZ.splice(index, 1);
    }
  }
}

function leerDatos(coleccion) {
  let recuperar = window.localStorage.getItem(coleccion);
  return (recuperar = JSON.parse(recuperar));
}

function guardarDatos(nombre, guardar) {
  window.localStorage.setItem(nombre, JSON.stringify(guardar));
}

DBZ = leerDatos("peleadores");
console.log(DBZ);
cargaDBZ();
guardarDatos("peleadores", DBZ);
console.log(leerDatos("peleadores"));
