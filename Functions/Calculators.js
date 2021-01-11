
screen_pos_calc = function (x,y) {

    let screenX;
    let screenY;
    let outOfScreen = false;

    if (Player.x + Player.width/2  - (Game.width +2)/2 * Game.block_size < x  && 
        Player.x + Player.width/2  + (Game.width +2)/2 * Game.block_size > x  &&
        Player.y + Player.height/2 - (Game.height+2)/2 * Game.block_size < y  && 
        Player.y + Player.height/2 + (Game.height+2)/2 * Game.block_size > y
    ) {


        screenX = x - (Player.x + Player.width/2  -Game.width/2*Game.block_size);
        screenY = y - (Player.y + Player.height/2 -Game.height/2*Game.block_size);
    } else {
        outOfScreen = true;
    }

    return [screenX, screenY, outOfScreen];
}







const TrigCalculation = function (angle, radius) {

    let changeX = Math.sin(angle) * radius;
    let changeY = -Math.cos(angle) * radius;

    return [changeX, changeY];
}