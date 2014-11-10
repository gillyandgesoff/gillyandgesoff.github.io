var mouseX;
var mouseY;
var gilly;
var gillyContents;
var gesoff;
var make;
var gillyWidth;
var windowWidth;
var active = true;
var makebg;
var header;
var windowHeight;

function onLoad() {
    gilly = document.getElementById("gilly");
    gesoff = document.getElementById("gesoff");
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    header = document.getElementById("header");
    gilly.onclick = gillyClick;
    gilly.onmouseleave = gillyMouseOut;
    gesoff.onclick = gesoffClick;
    gesoff.onmouseleave = gesoffMouseOut;
    header = document.getElementById("header");
    make = document.getElementById("make");
    makebg = document.getElementById("make_background");
};
window.onload = onLoad;


window.onresize = function(event) {
    windowWidth = window.innerWidth;
};

window.onmousemove = handleMouseMove;
function handleMouseMove(event) {
    mouseX = (event.clientX / windowWidth - 0.5)*2;
    if (active) {
        gillyWidth = rational_tanh(mouseX * 2) * 0.2 + 0.5;
        gilly.style.width = (1 - gillyWidth) * 100 + "%";
    };
};

function gillyClick() {
    gilly.className = "open";
    active = false;
};
function gillyMouseOut() {
    gilly.className = "active";
    active = true;
};
function gesoffClick() {
    gilly.className = "closed";
    gesoff.className = "open";
    active = false;
};
function gesoffMouseOut() {
    gilly.className = "active";
    gesoff.className = "active";
    active = true;
};

function rational_tanh(x)
{
    if( x < -3 )
        return -1;
    else if( x > 3 )
        return 1;
    else
        return x * ( 27 + x * x ) / ( 27 + 9 * x * x );
};
/*
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition};
}


var Yposition;
*/
function onScroll(event) {
    gillyMouseOut();
    gesoffMouseOut();
};
window.onscroll = onScroll;