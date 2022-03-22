import { obtenerChiste } from "./http-provider.js";

// 1
const body = document.body;
console.log(body);
// 2
let btnChistes, olList;

// 1 Construcción dinamica html
const crearHtmlChistes = () => {
  const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr />
    <button class="btn btn-primary">Cargar chiste</button>
    <ol class="mt-2 list-group"></ol>

    `;

  const divChistes = document.createElement("div");
  divChistes.innerHTML = html;
  body.append(divChistes);
};

// 2 Activar botón e iniciar un chiste automáticamente cuando se cargue la página.
const eventos = () => {
  olList = document.querySelector("ol");
  btnChistes = document.querySelector("button");

  btnChistes.addEventListener("click", async () => {
    // Deshabilitar boton hasta que el chiste aparezca
    btnChistes.disabled = true;
    dibujarChiste(await obtenerChiste());
    // habilitar boton despues de que el chiste apreció
    btnChistes.disabled = false;
  });
};

// Función para traer peticion http y dibujar el chiste en html el id y value
const dibujarChiste = (chiste) => {
  const olItem = document.createElement("li");
  olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
  olItem.classList.add("list-group-item");
  olList.append(olItem);
};

export const init = () => {
  crearHtmlChistes();
  eventos();
};
