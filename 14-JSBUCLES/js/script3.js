//FOR
let variable = Number(prompt("ingresar numero"));
console.log("Inicio bucle");

for (variable; variable < 100; variable++) {
  if (variable >= 75 && variable <= 80) {
    continue;
  }
  console.log(variable);

  //   if (variable === 78) {
  //     break;
  //   }
}

console.log("Fin bucle");
