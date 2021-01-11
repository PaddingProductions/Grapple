const app = new PIXI.Application({
    width: window.innerWidth, 
    height: window.innerHeight,
    backgroundColor: 0xeeeeee, 
    resolution: window.devicePixelRatio || 1,
    resize: window
});

PIXI.settings.SORTABLE_CHILDREN =true;
document.body.appendChild(app.view);

var FRAME_RATE = 20;

var moveKey = {};
var commandKey = {};


Title.init();


document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
document.addEventListener("mousemove", Mouse.moveHandler);
document.addEventListener("mouseup", Mouse.clickHandler);