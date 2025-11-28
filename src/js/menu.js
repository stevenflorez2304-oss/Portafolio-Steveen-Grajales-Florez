const boton =  document.getElementById(`menu_boton`);
const menu =  document.getElementById(`menu`);
menu.addEventListener(`click`, ()=>{
    menu.classList.toggle(`menu_show`)
} )
boton.addEventListener(`click`, ()=>{
    menu.classList.toggle(`menu_show`)
})


