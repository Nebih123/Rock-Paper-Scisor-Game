let lojtari = ""
let lojtariPiket = 0
let pcPiket = 0
let tekstiPc = document.querySelector("#tekstiPc")
let tekstiPlayer = document.querySelector("#tekstiPlayer")
let h1 = document.querySelector("#piketKompjuterit")
let h2 = document.querySelector("#piketLojtari")
let h3 = document.querySelector("#h3")


let butoni = document.querySelector("#butoni");
butoni.addEventListener("click", () => {
    let tekstiPlayer = document.querySelector("#tekstiPlayer")
    tekstiPlayer.textContent = `Lojtari zgjedh ${"Gur"}`
    lojtari = "Rock"
    console.log("Rock")
    pc()
})


let butoni2 = document.querySelector("#butoni2");
butoni2.addEventListener("click", () => {
    let tekstiPlayer = document.querySelector("#tekstiPlayer")
    tekstiPlayer.textContent = `Lojtari zgjedh ${"Leter"}`
    lojtari = "Paper"
    console.log("Paper")
    pc()
    
})

let butoni3 = document.querySelector("#butoni3");
butoni3.addEventListener("click", () => {
    tekstiPlayer.textContent = `Lojtari zgjedh ${"Gersher"}`
    lojtari = "Scissors"
    console.log("Scissors")
    pc()
})


function pc() {
let num = parseInt(Math.random() * 100)
let kompjuteri = ""
if (num < 33) {
    tekstiPc.textContent = `Kompjuteri zgjedh ${"Gur"}`
    kompjuteri = "Rock"
} else if (num < 66) {
    tekstiPc.textContent = `Kompjuteri zgjedh ${"Leter"}`
    kompjuteri = "Paper"
} else {
    tekstiPc.textContent = `Kompjuteri zgjedh ${"Gersher"}`
    kompjuteri = "Scissors"
}
console.log(kompjuteri)
if (
    kompjuteri == "Rock" && lojtari == "Scissors" ||
    kompjuteri == "Paper" && lojtari == "Rock" ||
    kompjuteri == "Scissors" && lojtari == "Paper" 
    ) {
        console.log("PC Win")
        pcPiket++
        h1.textContent = pcPiket 
    } else if (
    kompjuteri == "Scissors" && lojtari == "Rock" ||
    kompjuteri == "Rock" && lojtari == "Paper" ||
    kompjuteri == "Paper" && lojtari == "Scissors"
    ){
        console.log("Player Win")
        lojtariPiket++
        h2.textContent = lojtariPiket 
    }

    if (lojtariPiket == 3) {
        lojtariFiton()
    }

    if (pcPiket == 3) {
        pcFiton()
    }
}



function lojtariFiton() {
    h3.textContent = "Lojtari fiton me 3 pike"
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}



function pcFiton() {
    h3.textContent = "PC fiton me 3 pike"
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}




