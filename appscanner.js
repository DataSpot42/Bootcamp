const globalMousePosText = document.getElementById('global-mouse-pos');
const localMousePosText = document.getElementById('local-mouse-pos');
const aban =document.getElementById('abandon');
let localMousePos = { x: undefined, y: undefined };
let globalMousePos = { x: undefined, y: undefined };
let wx = undefined;
let wy = undefined;
let randx = undefined;
let randy = undefined;
let nearbyx = undefined;
let nearbyy = undefined;
let nearbytot = undefined;
let lockstatus = "";
let phasers = undefined;
let locked = false;
let mx = undefined;
let my = undefined;
let win = false;
let targetLocked = undefined;
document.getElementById("redalerttext").innerHTML = '<h2 id="capslock" class="pulse" style="color: red">RED ALERT</h2>'
const countdowntimer = document.getElementById('countdown');
var timeLeft = 30;
var elem = document.getElementById('countdown');
var elem2 = document.getElementById('countdown2');
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0 && win == false) {
    clearTimeout(timerId);
    aban.play();
    setTimeout(() => window.location.replace("stfail.html"), 3000) ;
  } else {
    elem.innerHTML = timeLeft;
    elem2.innerHTML = 'seconds remaining';
    
    timeLeft--;
    (timeLeft < 0) ? timeLeft = 0 : null;
  }
}


    
    wx = document.getElementById('starBox').offsetWidth;
    wy = document.getElementById('starBox').offsetHeight;
    randx = Math.floor(Math.random()*wx);
    randy = Math.floor(Math.random()*wy);
    red = document.getElementById("redSound");
    targetLocked = document.getElementById('lockedSound');
   red.currentTime = 0;
   red.lopp = true
   
   red.play();
   red.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);




window.addEventListener('mousemove', (event) => {
    
  const localX = event.clientX - event.target.offsetLeft;
  const localY = event.clientY - event.target.offsetTop;
  localMousePos = { x: localX, y: localY };
  
  globalMousePos = { x: event.clientX, y: event.clientY };
  (randx > localMousePos.x) ? nearbyx = randx - localMousePos.x : nearbyx = localMousePos.x - randx;
    (randy > localMousePos.y) ? nearbyy = randy - localMousePos.y : nearbyy = localMousePos.y - randy;
    nearbytot = nearbyx + nearbyy;
    red.volume = 1-nearbytot/1000;
    
    
  globalMousePosText.textContent = `${lockstatus}`;
  if (nearbytot <= 100) {
    lockstatus = "LOCKED!";
    locked = true;
    targetLocked.play();
    var mouseDown = 0;
    document.body.onmousedown = function() { 
    ++mouseDown;
    if(mouseDown && nearbytot <= 200){
      if (locked = true){
      targetLocked.volume = 0;
      phasers = document.getElementById("fireSound");
    phasers.loop = false;
    red.pause();
    phasers.currentTime = 0;
    setTimeout(() => phasers.play(), 2200) ;
    mx = globalMousePos.x;
    my = globalMousePos.y;
    document.getElementById("warbird").innerHTML = '<p class="LCARSresult">LCARS VIEWSCREEN<img class="war" src="images/warbirdfight.gif"></p>';
    win = true;
    setTimeout(() => document.getElementById("warbird").innerHTML = '<h2 class="war"></h2>' , 6400) ;
    setTimeout(() => window.location.replace("stend.html"), 9000) ;
  }}
    
}
    


  } else {lockstatus=""}


});