// Seleccion elementos del DOM
const menuOpenBtn = document.querySelector(".header__nav-open");
const menuCloseBtn = document.querySelector(".header__nav-close");
const headerNav = document.querySelector(".header__nav");

// Agregamos el evento de clic para abrir el menú
menuOpenBtn.addEventListener("click", () => {
    headerNav.classList.toggle("header__nav-visible"); // Añadir/Eliminar la clase
});

// Agregamos el evento de clic para cerrar el menú
menuCloseBtn.addEventListener("click", () => {
    headerNav.classList.toggle("header__nav-visible"); // Añadir/Eliminar la clase
});
