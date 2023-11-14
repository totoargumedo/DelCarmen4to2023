// console.log(window);

// console.log(document);

// console.log(document.body);

//crear elemento o nodo html
let titulito = document.createElement("h2");
titulito.innerText = "Manso Titulo";

//crear atibutos
titulito.setAttribute("style", "color:red;display:flex;");

//agregar clases
titulito.classList = "azul";

//agregar elemento o nodo html
let contenedor = document.querySelector("div");

// contenedor.innerHTML = titulito; reemplaza el contenido html del elemnto seleccionado
contenedor.appendChild(titulito);

// console.log(contenedor);
