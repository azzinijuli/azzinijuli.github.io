const menu = document.querySelector(".js-hamburgerMenu");
const menuItems = document.querySelector(".js-navMenu");

$(document).ready(function(){
    $('.series-carousel').slick({
        variableWidth: true,
        infinite: true,
        arrows: true,
        accesibility: true,
    });
});

menu.onclick = function () {
    menuItems.classList.toggle('show');
}