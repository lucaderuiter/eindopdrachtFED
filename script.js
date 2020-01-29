//https://codepen.io/FED_HERK04/pen/oNggmXN
//het uitklappen van de filter bar
var savebtn = document.getElementById("savebtn");

var filterbutton = document.getElementById("filterknop");
var filteractive = false;

var filtermenu = document.getElementById("filtersection");

savebtn.addEventListener('click', toggleMenu);

filterbutton.addEventListener('click', toggleMenu);

//https://codepen.io/StrengthandFreedom/pen/LeyjXG
//de filter bar weer weg kunnen klikken
document.querySelector('main').addEventListener("click", function(event) {
    if(filteractive==true){
        filtermenu.style.visibility = "hidden";
    
        filteractive = false;
    }
    
});

function toggleMenu(){
    if(filteractive == false) {
//        filtermenu.style.transitionTimingFunction = "ease-out";
        filtermenu.style.visibility = "visible";
        filteractive = true;
    } else {
        filtermenu.style.visibility = "hidden";
        filteractive = false;
    }
}





