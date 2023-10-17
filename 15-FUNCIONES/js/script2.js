let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));
let resultado;

function suma(argumento1, argumento2) {
  resultado = argumento1 + argumento2;
  console.log(resultado);
}

function resta(argumento1, argumento2) {
  resultado = argumento1 - argumento2;
  console.log(resultado);
}
function division(argumento1, argumento2) {
  resultado = argumento1 / argumento2;
  console.log(resultado);
}

suma(numero1, numero2);
resta(numero1, numero2);
division(numero1, numero2);
suma(resultado, 3);

let nombre = prompt("Nombre");

function nombrePantalla(algo) {
  console.log("Bienvenido " + algo);
}
