const globalMousePosText = document.getElementById('global-mouse-pos');
const localMousePosText = document.getElementById('local-mouse-pos');
let localMousePos = { x: undefined, y: undefined };
let globalMousePos = { x: undefined, y: undefined };
let wx = undefined;
let wy = undefined;
let randx = undefined;
let randy = undefined;
let nearbyx = undefined;
let nearbyy = undefined;
let nearbytot = undefined;
let lockstatus = "No Lock";
let phasers = undefined;
let locked = false;
let mx = undefined;
let my = undefined;

    
    wx = document.getElementById('starBox').offsetWidth;
    wy = document.getElementById('starBox').offsetHeight;
    randx = Math.floor(Math.random()*wx);
    randy = Math.floor(Math.random()*wy);
    red = document.getElementById("redSound");
    
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
    

  globalMousePosText.textContent = `(${localMousePos.x}, ${localMousePos.y}, ${wx}, ${wy}, ${randx}, ${randy} , ${nearbyx}, ${nearbyy}, ${nearbytot}, ${lockstatus})`;
  if (nearbytot <= 200) {
    lockstatus = "LOCKED! Press Button to Fire!!";
    locked = true;
    var mouseDown = 0;
    document.body.onmousedown = function() { 
    ++mouseDown;
    if(mouseDown && nearbytot <= 200){
      if (locked = true){
      phasers = document.getElementById("fireSound");
    phasers.loop = false;
    red.pause();
    phasers.currentTime = 0;
    setTimeout(() => phasers.play(), 2200) ;
    mx = globalMousePos.x;
    my = globalMousePos.y;
    document.getElementById("warbird").innerHTML = '<h2 class="viewscreen">LCARS VIEWSCREEN</h2><img class="war" src="images/warbirdfight.gif" height="250" width="350">';
    setTimeout(() => document.getElementById("warbird").innerHTML = '<h2 class="war">LCARS VIEWSCREEN WARBIRD DESROYED!</h2>' , 6400) ;
    setTimeout(() => window.location.replace("stgamedone.html"), 10000) ;
  }}
    
}
    


  } else {lockstatus="No Lock"}


});