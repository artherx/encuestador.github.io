const texto = document.getElementById("resultado")
const botonA = document.getElementById("IA")

botonA.addEventListener('click', ()=>{
    texto.textContent= Math.random() *(1-0)+0;
})