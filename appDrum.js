const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");
let x = ""
const ani = document.querySelector(".drumsBoom");
let hide = document.getElementById("capslock")
hide.style.display = "none"

let drumSound = ""
let drumBut ="boomBut"
const buttonPressed = e => { 
    console.log (`${e.target.id}`);
    drumBut = e.target.id;
    
   (drumBut == "Boom") ? drumSound = document.getElementById("boom") : 
   (drumBut == "Clap") ? drumSound = document.getElementById("clap") : 
   (drumBut == "HiHat") ? drumSound = document.getElementById("hihat") : 
   (drumBut == "Kick") ? drumSound = document.getElementById("kick") : 
   (drumBut == "OpenHat") ? drumSound = document.getElementById("openhat") : 
   (drumBut == "Ride") ? drumSound = document.getElementById("ride") : 
   (drumBut == "Snare") ? drumSound = document.getElementById("snare") : 
   (drumBut == "Tink") ? drumSound = document.getElementById("tink") : 
   (drumBut == "Torn") ? drumSound = document.getElementById("torn") : 
    drumSound.pause();
   drumSound.currentTime = 0;
   drumSound.play(); 
   console.log("hello")
   x = document.getElementById(drumBut)
   if (drumBut == "OpenHat" || drumBut == "HiHat" || drumBut == "Ride" || drumBut =="Tink") {
    x.animate(buttonSpinning, buttonTiming);} 
    else {if (drumBut== "Clap") {
      x.animate(buttonWidening, buttonTiming);} 
      else {x.animate(buttonGrowing, buttonTiming);};}
   
  }

  for (let button of buttons) {
button.addEventListener("click", buttonPressed);


  }

document.addEventListener("keydown",(event) => {
let drumSound = ""    
   console.log(event); 
   if (event.getModifierState("CapsLock")) {
    hide.style.display = "block";
  } else {
    hide.style.display = "none"
  }
   
   
    const keyP = event.key
   console.log(keyP);
   
   if (keyP == "y") {drumSound = document.getElementById("boom"); x = document.getElementById("Boom")} 
   if (keyP == "i") {drumSound = document.getElementById("clap"); x = document.getElementById("Clap")} 
   if (keyP == "u") {drumSound = document.getElementById("hihat"); x = document.getElementById("HiHat")}  
   if (keyP == "n") {drumSound = document.getElementById("kick"); x = document.getElementById("Kick")}  
   if (keyP == "j") {drumSound = document.getElementById("openhat"); x = document.getElementById("OpenHat")}  
   if (keyP == "h") {drumSound = document.getElementById("ride"); x = document.getElementById("Ride")} 
   if (keyP == "k") {drumSound = document.getElementById("snare"); x = document.getElementById("Snare")} 
   if (keyP == "m") {drumSound = document.getElementById("tink"); x = document.getElementById("Tink")} 
   if (keyP == "b") {drumSound = document.getElementById("torn"); x = document.getElementById("Torn")} 

   drumSound.pause();
   drumSound.currentTime = 0;
   drumSound.play(); 
   
   if (keyP == "u" || keyP == "h" || keyP == "j" || keyP =="m") {
    x.animate(buttonSpinning, buttonTiming);} 
    else {if (keyP == "i") {
      x.animate(buttonWidening, buttonTiming);} 
      else {x.animate(buttonGrowing, buttonTiming);};}

   
    })

    const buttonSpinning = [
      { transform: "rotate(0deg)" },
      { transform: "scale(1.3) rotate(20deg)" },
      { transform: "scale(1.5) rotate(-30deg)" },
      { transform: "scale(1.3) rotate( 30deg)" },
    ];
    
    const buttonTiming = {
      duration: 20,
      iterations: 10,
    };
    const buttonGrowing = [
      { transform: "scale(2) rotate(10deg)"},
      { transform: "scalre(2.8) rotate(-10deg)"}
  ];
   const buttonWidening = [
      { transform: "scale(1.4) scalex(2) rotate(2deg)"},
      { transform: "scale(0.8) scalex(1.6) rotate(-2deg"}
   ]
   
    
    animation.addEventListener("click", () => {
      console.log("hello")
      ani.animate(buttonSpinning, buttonTiming);
    }); 
