const people = [
  { name: "tito", age: 35, isTeacher: "si" },
  { name: "tadeo", age: 82, isTeacher: "si" },
  { name: "calvo", age: 43, isTeacher: "no" },
];

let choice = false;

while (choice) {
  let nombre = prompt("Ingrese nombre");
  let edad = parseInt(prompt("Ingrese edad"));
  let esProfe = prompt("Ingrese si o no");

  const persona = { name: nombre, age: edad, isTeacher: esProfe };
  people.push(persona);

  let seguir = prompt("si o no");
  if (seguir === "no") {
    break;
  }
}

console.log(people[0]);
