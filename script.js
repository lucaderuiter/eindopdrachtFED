//https://codepen.io/FED_HERK04/pen/oNggmXN

var button = document.getElementById("filterknop");
var filteractive = false;

var filtermenu = document.getElementById("filtersection");

button.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(filteractive == false) {
        filtermenu.style.visibility = "visible"
        filteractive = true;
    } else {
        filtermenu.style.visibility = "hidden"
        filteractive = false;
    }
    
}


