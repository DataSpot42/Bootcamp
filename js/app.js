let hide = document.getElementById("boxes")
let hide2 = document.getElementById("boxes2")
let starttext = document.getElementById("starttext")    
        
hide.style.display = "none"
hide2.style.display = "none"
starttext.style.display = "block"
document.addEventListener("keydown",(event) => {
    
const keyCodeCode = event.code
const keyCodeWhich = event.which
const keyCodeKey = event.key
starttext.style.display = "none"
hide.style.display = "flex"  
hide2.style.display = "block"    
document.getElementById("keycode").innerHTML = keyCodeCode;
document.getElementById("keyWhich").innerHTML = keyCodeWhich;
document.getElementById("keyKey").innerHTML = keyCodeKey;
})