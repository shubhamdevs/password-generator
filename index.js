const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.querySelector("#sample1")
let passwordTwo = document.querySelector("#sample2")
let pasbutton = document.getElementById("passbutton")

function randNum() { 
    return characters[Math.floor(Math.random() * characters.length)]
}

function passkey() {
    let password = ""
    for (let i = 1; i < 16; i++ ) {
        password += randNum()
    }
    return password
}

passbutton.addEventListener("click", function() {
    passwordOne.textContent = passkey()
    passwordTwo.textContent = passkey()
})
