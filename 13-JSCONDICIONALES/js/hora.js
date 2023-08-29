let ahora = new Date().getHours();

if (ahora >= 0 && ahora < 12) {
  alert("Es mañana");
} else if (ahora >= 12 && ahora < 20) {
  alert("Es mediodia");
} else {
  alert("Es noche");
}

console.log(ahora);
