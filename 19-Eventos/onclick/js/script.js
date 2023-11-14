const personajes = [
  {
    name: "Mario",
    description: "Fontanero loco",
    image:
      "https://i.pinimg.com/564x/92/b8/bf/92b8bfc1d4ff511f801fe6fef7d2a2f3.jpg",
  },
  {
    name: "Simon Belmont",
    description: "Cazador de vampiros y enemigo jurado del poderoso Dracula",
    image:
      "https://ih1.redbubble.net/image.441583742.6867/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
  },
  {
    name: "Barrita tetris",
    description: "Pieza del juego tetris, enemigo o aliado?",
    image:
      "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-1/299190026_381318730815248_1396976456206263893_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n43az7QF_8kAX9mjM_m&_nc_ht=scontent.fcor10-3.fna&oh=00_AfDDa_5cr8jPLXnYSF2Gjefm8DB_hONm3zqTllOuoGOnIA&oe=65587821",
  },
];

const simonBoton = document.getElementById("simon");
const iblockBoton = document.getElementById("iblock");
const marioBoton = document.getElementById("mario");

const render = (busqueda) => {
  const card = document.getElementById("cardPJ");
  let pj = personajes.find((personaje) => personaje.name === busqueda);

  card.innerHTML = "";

  card.innerHTML = `
                    <p class="card-title">${pj.name}</p>
                    <div class="card-img"
                    style="background-image: url('${pj.image}')">
                    </div>
                    <p class="card-description">${pj.description}</p>
  `;
};

simonBoton.addEventListener("click", () => {
  render("Simon Belmont");
});
iblockBoton.addEventListener("click", () => {
  render("Barrita tetris");
});
marioBoton.addEventListener("click", () => {
  render("Mario");
});
