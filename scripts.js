let hoy = new Date();

let minutes;
let sprite = 0
let x = 1;
minutes = hoy.getSeconds();

console.log(minutes);
let boton = document.getElementById("btn_xd")

function eva() {
    if (x = 1) {
        document.getElementById("imgPersonaje").src = "img/PikachuRunning.gif";
        x = 0;
    }else if (x = 0) {
        document.getElementById("imgPersonaje").src = "img/Kirby.gif"
        x = 1;
    }else {
        console.log("se jo")
    }
    console.log("xd");
}


boton.addEventListener("click", eva())