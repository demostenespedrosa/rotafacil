const panel = document.getElementById("menuPanel");
const btnMenu = document.querySelector(".menu-button")

function toggleMenu() {
    panel.classList.toggle("show");
    btnMenu.classList.toggle("rotate")
}