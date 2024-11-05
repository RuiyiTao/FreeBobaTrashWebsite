var time = 0;
var imagepositionx = 0;
var imagepositiony = 0;
document.addEventListener("mousemove", (event) => {
    imagepositionx = event.clientX;
    imagepositiony = event.clientY;
});

setInterval(() => {
    document.getElementById("image").style.left = (imagepositionx - 125 + Math.cos(time) * 200) + "px";
    document.getElementById("image").style.top = (imagepositiony - 125 + Math.sin(time) * 200) + "px";
    time += 0.2;
}, 10);