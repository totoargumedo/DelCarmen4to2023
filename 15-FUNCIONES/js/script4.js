//Parametros y retornos2

let one = Number(prompt("Ingrese un numero"));
let two = Number(prompt("Ingrese otro numero"));

function suma(sumando1, sumando2) {
  return sumando1 + sumando2;
}

let resultado = suma(one, two);
alert(resultado);

let three = Number(prompt("Ingrese un tercer numero"));
alert(suma(resultado, three));
