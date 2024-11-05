document.body.addEventListener("mousemove", (event) => {
    document.querySelector("img").style.x = event.clientX;
    document.querySelector("img").style.y = event.clientY;
});