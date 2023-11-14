const personajes = [];

const form = document.getElementById("cargaPJ");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log(form.elements.title.value);
  const pj = {
    name: form.elements.title.value,
    description: form.elements.description.value,
    image: form.elements.image.value,
  };

  personajes.push(pj);

  console.log(personajes);

  form.reset();
});
