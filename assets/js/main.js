var btnMenu = document.getElementById("js-menu");
var nav     = document.getElementById("js-nav");

btnMenu.addEventListener("click", function(){
    nav.classList.toggle("mostrar");
})