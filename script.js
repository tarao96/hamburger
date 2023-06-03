let hamburger = document.getElementById("hamburger");
let hamburgerMenu = document.getElementById("hamburger-menu");

hamburger.addEventListener('click', function () {
    hamburgerMenu.classList.add('show');
    hamburger.style.display = "none";
});