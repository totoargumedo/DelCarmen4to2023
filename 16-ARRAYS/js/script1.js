const DBZ = [
  "Goku",
  "Gohan",
  "Ten",
  "Milk",
  "Bulma",
  "Piccollo",
  "Saibaman",
  "Vegeta",
  "Goten",
];

function last(array) {
  return array[array.length - 1];
}

console.log("Inicio programa");

console.log(DBZ);

console.log(DBZ[2]);

console.log(DBZ.length);

console.log(DBZ[7]);

console.log(DBZ[DBZ.length - 1]);

console.log(last(DBZ));

let busqueda = prompt("Ingrese un personaje");

// for (peleador of DBZ) {
//   if (peleador === busqueda) {
//     console.log(busqueda + " esite");
//     break;
//   }
// }
let resultado;
for (let i = 0; i < DBZ.length; i++) {
  if (DBZ[i] === busqueda) {
    console.log(DBZ[i] + " esta en el indice " + i);
    resultado = DBZ[i];
    break;
  }
}
