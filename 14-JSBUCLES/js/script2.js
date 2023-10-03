//DO WHILE

// let numbero = 11;

// console.log("Inicio del bucle");

// do {
//   console.log(numbero);
//   //   numbero = numbero +1
//   numbero++;
// } while (numbero <= 10);

// console.log("Fin del bucle");

let mail;
console.log("Inicio del bucle");

do {
  mail = prompt("Ingrese su correo");
} while (!mail.includes("@"));

console.log("Correo correcto");
console.log("Fin del bucle");
