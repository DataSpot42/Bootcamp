const globalMousePosText = document.getElementById('global-mouse-pos');
const localMousePosText = document.getElementById('local-mouse-pos');
let hide = document.getElementById("Before");
let x = undefined;
let localMousePos = { x: undefined, y: undefined };
let globalMousePos = { x: undefined, y: undefined };
let wx = undefined;
let wy = undefined;
let randx = undefined;
let randy = undefined;
let nearbyx = undefined;
let nearbyy = undefined;
let nearbytot = undefined;
let red= undefined;
let cloak= undefined;
let scan=undefined;
console.log(hide);





window.addEventListener('mousemove', (event) => {
    
  const localX = event.clientX - event.target.offsetLeft;
  const localY = event.clientY - event.target.offsetTop;
  localMousePos = { x: localX, y: localY };
  
      wx = window.innerWidth;
    wy = window.innerHeight;  
    randx = Math.floor(Math.random()*wx);
    randy = Math.floor(Math.random()*wy);
  
  globalMousePos = { x: event.clientX, y: event.clientY };
  (randx > globalMousePos.x) ? nearbyx = randx - globalMousePos.x : nearbyx = globalMousePos.x - randx;
    (randy > globalMousePos.y) ? nearbyy = randy - globalMousePos.y : nearbyy = globalMousePos.y - randy;
    (nearbyx > nearbyy) ? nearbytot = nearbyx - nearbyy : nearbytot = nearbyy - nearbyx;
    red.volume = 1 - nearbytot/1000;
    console.log(scan.volume);
    
    if (nearbytot < 500) { console.log("Hello there")
      
    }

  globalMousePosText.textContent = `(${globalMousePos.x}, ${globalMousePos.y}, ${wx}, ${wy}, ${randx}, ${randy} , ${nearbyx}, ${nearbyy}, ${nearbytot}, ${red.volume})`;
  
});

document.getElementById('STButt').onclick = function() {
    cloak = document.getElementById("cloak");
    red = document.getElementById("redSound");
    scan = document.getElementById("scanner");
    cloak.currentTime = 0;
   cloak.volume = 1;
   cloak.play();
    

    document.getElementById("warbird").innerHTML = '<img id="warID" src="images/cloaking.gif" height="250" width="250">';
   document.getElementById("redalertText").innerHTML = '<h2 id="capslock" class="pulse" style="color: red">RED ALERT</h2>'
    red.currentTime = 0;
   red.loop = true;
   scan.loop = true;
  
   red.play();
   red.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
    red.volume = 0.005;
    scan.volume = 0.1;
    scan.play();
    scan.addEventListner('ended', function(){
        this.currentTime = 0;
        this.play()},false);
    hide.style.display = "none"     
    setTimeout(() => hide.style.display = "none", 3000)    
    

    
    
      

}

