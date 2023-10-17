//Items de videojuegos

const arrayItems = [];

console.log("Inicio de carga");

let item = prompt("Ingrese un item o quit para terminar")
  .toLocaleLowerCase()
  .trim();

while (item != "quit") {
  arrayItems.push(item);
  item = prompt("Ingrese un item o quit para terminar")
    .toLocaleLowerCase()
    .trim();
}

console.log("Fin de carga");

console.log(arrayItems);

console.log("Inicio de borrado");

let borrar = prompt("Ingrese un item para borrar").toLocaleLowerCase().trim();

for (let index = 0; index < arrayItems.length; index++) {
  if (arrayItems[index] === borrar) {
    arrayItems.splice(index, 1);
  }
}

console.log("Fin del borrado");

console.log(arrayItems);

//Explicacion tecnica
// console.log(arrayItems);

// arrayItems.push(3); // Agregar al final
// arrayItems.push(4);
// arrayItems.push(5);
// arrayItems.push(1);

// console.log(arrayItems);

// arrayItems.unshift(9); // Agregar al principio

// console.log(arrayItems);

// arrayItems.pop(); // Quita el ultimo elemento

// console.log(arrayItems);

// arrayItems.shift();

// console.log(arrayItems); //Quita el primer elemento

// arrayItems.splice(2, 1); //Borra el elemento en posicion 2, 1 solo elemento

// console.log(arrayItems);
