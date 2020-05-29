const menu = document.querySelector(".js-hamburgerMenu");
const menuItems = document.querySelector(".js-navMenu");

menu.onclick = function () {
    menuItems.classList.toggle('show');
}