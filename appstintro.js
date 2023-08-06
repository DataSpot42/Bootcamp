document.getElementById("viewscreen").innerHTML = '<video id="cloak" width="100%" height="100%"><source src="images/cloak.mp4" type="video/mp4"></video>';
  /* document.getElementById("redalertText").innerHTML = '<h2 id="capslock" class="pulse" style="color: red">RED ALERT</h2>' */
cloak = document.getElementById("cloaksound");
red = document.getElementById("redsound");
let vid = document.getElementById("cloak");
let exitSound = undefined;
let beepSound = undefined;
red.loop=true;
setTimeout(() => vid.play(), 5000);
setTimeout(() => cloak.play(), 5000);
setTimeout(() => red.play(), 2000);
;
setTimeout(() => document.getElementById("redalerttext").innerHTML = '<h2 id="capslock" class="pulse" style="color: red">RED ALERT</h2>', 2000);
setTimeout(() => document.getElementById("inst").innerHTML = 'Warbird has cloaked - Initiate Scanner to scan for Tachyons', 7000);

document.getElementById('exitBut').onclick = function() {
exitSound = document.getElementById("exitAudio");
cloak.volume = 0;
red.volume = 0;
exitSound.play();
setTimeout(() => window.location.replace("index.html"), 1000)
}

document.getElementById('scanBut').onclick = function() {
  beepSound = document.getElementById("beepAudio");
  cloak.volume = 0;
  red.volume = 0;
  beepSound.play();
  setTimeout(() => window.location.replace("lcarsscanner.html"), 1000)
  }