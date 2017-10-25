function initCanvas(canvas, ctx) {
    canvas.addEventListener("resize", setCanvasDimensions, false);
    canvas.addEventListener("mousemove", function (e) {update(e, ctx);}, false);
    setCanvasDimensions(canvas)
}

function setCanvasDimensions(canvas) {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function calculateLineEndpointX(mouseX){
    if (mouseX > window.innerWidth/2) {
        return window.innerWidth + 100;
    }
    return -100;
}

function update(e, ctx) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.beginPath();
    ctx.moveTo(calculateLineEndpointX(e.x), e.y);
    ctx.lineTo(e.x, e.y);
    ctx.lineWidth = 100;
    ctx.lineCap = 'round';
    ctx.strokeStyle ='#0a0a0a';
    ctx.stroke();
}
