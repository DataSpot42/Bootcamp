let hide = document.getElementById("boxes")
let starttext = document.getElementById("starttext")    
        
hide.style.display = "none"
starttext.style.display = "block"
document.addEventListener("keypress",(event) => {
    
const keyCodeCode = event.code
const keyCodeWhich = event.which
starttext.style.display = "none"
hide.style.display = "flex"    
document.getElementById("keycodeA").innerHTML = keyCodeCode;
document.getElementById("keycodeB").innerHTML = keyCodeWhich;
})