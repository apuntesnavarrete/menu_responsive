let boton = document.getElementById("icono_input");
let nav = document.getElementsByClassName("ul")[0]

console.log(nav)

estado_boton_menu = 0
boton.addEventListener("click",() => {
    if(estado_boton_menu == 0){
        nav.style.transform = 'translate(0,0)';
        nav.style.opacity = "1"
        estado_boton_menu++
    }else{
        nav.style.transform = 'translate(0,-1300%)';
        nav.style.opacity = "0"
        estado_boton_menu--
    }
})