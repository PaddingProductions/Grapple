
var Game = {

    LOOP: undefined,

    block_size: 50,



    init: function () {

        commandKey = {};
        moveKey = {};

        this.width =  document.body.clientWidth  / Game.block_size; // the /2 *2 is to make  
        this.height = document.body.clientHeight / Game.block_size; // sure it's not odd

        Player.init(7*this.block_size, 4*this.block_size);
        Map.init();

        this.LOOP = setInterval(this.tick, FRAME_RATE);
    },

    tick: function () {
        this.width =  document.body.clientWidth  / Game.block_size;
        this.height = document.body.clientHeight / Game.block_size;

        Player.tick();
        Map.update(Player.x,Player.y);


        commandKey = {};
        Mouse.button = -1;
    }
}

var Player;