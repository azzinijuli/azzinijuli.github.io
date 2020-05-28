const menu = document.querySelector(".js-hamburgerMenu");
const menuItems = document.querySelector(".js-navMenu");

menu.onclick = function () {
    if (menuItems.style.display === "inline-flex") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "inline-flex";
    }
}
