let count = 0 ;
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    console.log("increment")
    count += 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")