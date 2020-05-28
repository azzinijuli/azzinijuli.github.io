const menu = document.querySelector(".js-hamburgerMenu");
const menuItems = document.querySelector(".js-navMenu");

menu.onclick = function () {
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}
