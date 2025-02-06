const btnMenu = document.querySelector(".btn");
const list = document.querySelector(".list");
const navLinks = document.querySelectorAll(".list li a");

btnMenu.addEventListener("click", () => {
    list.classList.toggle("list-toggle");
    btnMenu.classList.toggle("btn-toggle");
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        list.classList.remove("list-toggle");
        btnMenu.classList.remove("btn-toggle");
    });
});

document.addEventListener("click", (e) => {
    // Verificar si el clic fue fuera del menú y del botón
    if (!list.contains(e.target) && !btnMenu.contains(e.target)) {
        list.classList.remove("list-toggle");
        btnMenu.classList.remove("btn-toggle");
    }
});
