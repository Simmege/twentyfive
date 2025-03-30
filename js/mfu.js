

document.querySelector(".lager").addEventListener("click", visaMeny)


document.querySelector(".meny_knapp").addEventListener("click", visaMeny)

function visaMeny(){
   
    let menu = document.querySelector(".meny")
    menu.classList.toggle("show")

    let layer = document.querySelector(".lager")
    layer.classList.toggle("visible")
}