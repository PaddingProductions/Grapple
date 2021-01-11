let Mouse = {
    x:0,
    y:0,
    angle: 0, // this is relative to center.
    button: -1,
    slope: 0, // this is relative to center.

    moveHandler: function(e) {

        Mouse.x = e.offsetX;
        Mouse.y = e.offsetY;

        const diffx = Mouse.x- (Game.width/2*Game.block_size +25);
        const diffy = Mouse.y- (Game.height/2*Game.block_size +25);
        Mouse.angle = Math.atan(   Math.abs((diffy)  /  (diffx))   );
        
        // becasue of the nature of tan, u can only get the degree 90 or less, thus, to increase it we must do some math
        if (diffy<0 && diffx<0) {
            Mouse.angle += 3 *( 90*Math.PI /180);

        } else if (diffy>0 && diffx<0) {
            Mouse.angle = 90*Math.PI/180 - Mouse.angle;
            Mouse.angle += 2 *( 90*Math.PI /180);
        } else if (diffy>=0 && diffx>=0) {
            Mouse.angle += 1 *( 90*Math.PI /180);
        } else {
            Mouse.angle = 90*Math.PI/180 - Mouse.angle;
        }
    },
    clickHandler: function(e) {
        Mouse.button = e.button;
    },
}