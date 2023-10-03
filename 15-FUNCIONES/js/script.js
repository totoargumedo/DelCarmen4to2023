let numero1;
let numero2;
let resultado;
function pedirDatos() {
  //BLOQUE DE FUNCION O "QUE HACE"

  numero1 = prompt("Ingrese un número");
  numero2 = prompt("Ingrese otro número");

  numero1 = Number(numero1);
  numero2 = Number(numero2);

  while (isNaN(numero1)) {
    numero1 = prompt("Dato Incorrecto. Ingrese nuevamente un número");
    numero1 = Number(numero1);
  }

  while (isNaN(numero2)) {
    numero2 = prompt("Dato Incorrecto. Ingrese nuevamente un segundo número");
    numero2 = Number(numero2);
  }
}

function suma() {
  resultado = numero1 + numero2;
  console.log("El resultado de la suma es" + " " + resultado);
}

function resta() {
  resultado = numero1 - numero2;
  console.log("El resultado de la resta es" + " " + resultado);
}

function division() {
  resultado = numero1 / numero2;
  console.log("El resultado de la division es" + " " + resultado);
}

pedirDatos();
suma();
resta();
division();
