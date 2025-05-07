

document.querySelector(".lager").addEventListener("click", visaMeny)

document.querySelector(".meny_knapp").addEventListener("click", visaMeny)

document.querySelector("#x").addEventListener("click", doljReklam)

document.querySelector("#x2").addEventListener("click", doljReklam2)



function visaMeny(){
   
    let menu = document.querySelector(".meny")
    menu.classList.toggle("show")

    let layer = document.querySelector(".lager")
    layer.classList.toggle("visible")
}

function doljReklam(){
    let reklam = document.querySelector("#reklam")
    reklam.style.display = 'none';

    let knapp = document.querySelector("#x")
    knapp.style.display = 'none'
}

function doljReklam2(){
    let reklam = document.querySelector("#reklam2")
    reklam.style.display = 'none';

    let knapp = document.querySelector("#x2")
    knapp.style.display = 'none'
}