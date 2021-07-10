var mouseEvent = "empty";
var lpx, lpy;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red"
width=400;
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(){
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    cpx=e.clientX-canvas.offsetLeft;
    cpy=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lpx,lpy);
        ctx.lineTo(cpx,cpy);
        ctx.stroke();
    }
    lpx=cpx;
    lpy=cpy;
}