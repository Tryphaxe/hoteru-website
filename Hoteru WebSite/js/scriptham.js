// CODE POUR L'ONGLET DE DECONNEXION

const hamburgerToggler = document.querySelector(".hamburger");
const navlinkscontainer = document.querySelector(".navlinks-container");

const toggleNav = e => {
    hamburgerToggler.classList.toggle("open")
    navlinkscontainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav);