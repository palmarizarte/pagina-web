const btnMenu = document.querySelector(".btn");
const list = document.querySelector(".list");
const navLinks = document.querySelectorAll(".list li a");

btnMenu.addEventListener("click",()=>{
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

// Ejemplo de un carrusel simple
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0;
const mainElement = document.querySelector("main");

function changeBackgroundImage() {
    mainElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); // Cambia la imagen cada 5 segundos