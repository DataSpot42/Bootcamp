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

  let a;
            let time;
            let week = 0;
            let month = 0;
            let t2 = 0;
            let t1 = 0;
            let start = 0;
            setInterval(() => {
                a = new Date();
                month = a.getMonth() + 1;
                time = a.getDate() + '' + month + '' + a.getFullYear() + "  " + String(a.getHours()).padStart(2, "0") + ':' + String(a.getMinutes()).padStart(2, "0") + ':' + String(a.getSeconds()).padStart(2, "0");
                let timeStamp = time;
                document.getElementById('time').innerHTML = timeStamp;
                start = new Date("2023-07-10");
                t2 = a.getTime();
                t1 = start.getTime();
                week = (Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7)) + 1);
                let output = week;

                document.getElementById('week').innerHTML = output;
            }, 1000);