document.getElementById("viewscreen").innerHTML = '<img src="images/sfEnd.gif" width="100%" height="100%">';
  /* document.getElementById("redalertText").innerHTML = '<h2 id="capslock" class="pulse" style="color: red">RED ALERT</h2>' */
cloak = document.getElementById("cloaksound");
red = document.getElementById("redsound");
let vid = document.getElementById("cloak");
let exitSound = undefined;
let beepSound = undefined;
red.loop=true;

document.getElementById('exitBut').onclick = function() {
    exitSound = document.getElementById("exitAudio");
    cloak.volume = 0;
    red.volume = 0;
    exitSound.play();
    setTimeout(() => window.location.replace("index.html"), 2000)
    }
    
document.getElementById('shipBut').onclick = function() {
      beepSound = document.getElementById("beepAudio");
      cloak.volume = 0;
      red.volume = 0;
      beepSound.play();
      setTimeout(() => window.location.replace("lcarsscanner.html"), 2000)
      }