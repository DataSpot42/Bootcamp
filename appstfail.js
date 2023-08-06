document.getElementById("explodeship").innerHTML = '<video id="vidbang" width="100%" height="100%"><source src="images/entexp.mp4" type="video/mp4"></video>';
  /* document.getElementById("redalertText").innerHTML = '<h2 id="capslock" class="pulse" style="color: red">RED ALERT</h2>' */
let bang = document.getElementById("bang");
let hide = document.getElementById("buttons");
let vid = document.getElementById("vidbang");
let vidbox = document.getElementById("explodeship");
let exitSound = undefined;
let beepSound = undefined;
hide.style.display = "none";
setTimeout(() => vid.play(), 400);
setTimeout(() => bang.play(), 1400);
setTimeout(() => (vidbox.style.display = "none"), 4700);
setTimeout(() => (hide.style.display = "block"), 5000);

document.getElementById('exitBut').onclick = function() {
  exitSound = document.getElementById("exitAudio");
  bang.volume = 0;
  
  exitSound.play();
  setTimeout(() => window.location.replace("index.html"), 1000)
  }
  
  document.getElementById('scanBut').onclick = function() {
    beepSound = document.getElementById("beepAudio");
    bang.volume = 0;
    
    beepSound.play();
    setTimeout(() => window.location.replace("stintro.html"), 1000)
    }