// //sintaxis objeto
// let persona = {
//   nombre: "Toto",
//   edad: 35,
//   esProfe: true,
//   gustos: ["Asado", "D&D", "Computadoras"],
// };

// //visibilizar propiedades
// console.log(persona);
// console.log(persona.edad);
// console.log(persona.gustos);

// //agregar nueva propiedad
// persona.altura = 180;
// console.log(persona);

// //cambiar un valor de propiedad
// persona.edad = 36;
// console.log(persona.edad);
// console.log(persona["edad"]);

const people = [];
console.log(people);
let carga;

while (carga != "no") {
  let nombre = prompt("Ingrese nombre");
  let edad = prompt("Ingrese edad");
  let esProfe = false;
  let gustos = [];

  const persona = {
    nombre,
    edad,
    esProfe,
    gustos,
  };

  console.log(persona);

  people.push(persona);
  carga = prompt("Seguir cargando si o no");
}
console.log(people);
