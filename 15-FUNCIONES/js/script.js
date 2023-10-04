let numero1;
let numero2;
let resultado;
let operacion;
let opcion;

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

// pedirDatos();
// suma();
// resta();
// division();

//pedirDatos();
// suma();
// resta();
// division();

function menu() {
  operacion = prompt(
    "Ingrese la operacion que desea realizar. Ingrese suma, resta o division segun corresponda"
  );

  console.log(operacion);

  operacion = operacion.toLocaleLowerCase().trim();
  // operacion = operacion.trim()

  while (
    operacion != "suma" &&
    operacion != "resta" &&
    operacion != "division"
  ) {
    operacion = prompt(
      "Opcion incorrecta. Ingrese suma, resta o division segun corresponda"
    );
    operacion = operacion.toLocaleLowerCase().trim();
    console.log(operacion);
  }

  if (operacion === "suma") {
    pedirDatos();
    suma();
    menuFinal();
  } else if (operacion === "resta") {
    pedirDatos();
    resta();
    menuFinal();
  } else if (operacion === "division") {
    pedirDatos();
    division();
    menuFinal();
  }
}

function menuFinal() {
  opcion = prompt(
    "Desea terminar el programa o realizar nueva operacion. Ingrese otra o terminar segun corresponda"
  );

  opcion = opcion.toLocaleLowerCase().trim();

  while (opcion != "otra" && opcion != "terminar") {
    opcion = prompt(
      "Opcion incorrecta. Ingrese otra o terminar segun corresponda"
    );

    opcion = opcion.toLocaleLowerCase().trim();
  }

  if (opcion === "otra") {
    menu();
  } else {
    console.log("Programa terminado");
  }
}

menu();
