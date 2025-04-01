// Obtener elementos del DOM
const verDetallesButton = document.getElementById("verDetalles");
const volverButton = document.getElementById("volver");
const tarjeta = document.querySelector(".tarjeta");
const frontal = tarjeta.querySelector(".frontal");
const posterior = tarjeta.querySelector(".posterior");
// Función para voltear la tarjeta
verDetallesButton.addEventListener("click", () => {
  posterior.classList.toggle("visible");
  frontal.classList.toggle("oculto");
});
// Función para volver a la cara fronta
volverButton.addEventListener("click", () => {
  posterior.classList.toggle("visible");
  frontal.classList.toggle("oculto");
});
