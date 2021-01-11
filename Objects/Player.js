
var Player = {

    x: undefined,
    y: undefined,
    screenX: undefined,
    screenY: undefined,

    width: Game.block_size,
    height: Game.block_size,

    container: new PIXI.Container(),
    sprite: new PIXI.Graphics(),

    hitbox: new Hitbox(this.x,this.y, this.width, this.height, this),
    killZone: [],

    velox: 0,                      // positive = right
    veloy: 0,                      // positive = down
    direct: 1,                    // negative = left positive = right

                  
     


    init: function (startX, startY) {
        
        app.stage.addChild(this.container);

        
        this.x = startX;
        this.y = startY;

        this.screenX = screen_pos_calc(startX,startY)[0];   // calculate screen pos
        this.screenY = screen_pos_calc(startX,startY)[1];

        this.container.x = this.screenX;                    // set location
        this.container.y = this.screenY;

        this.sprite.beginFill(0xa460d1);    
        this.sprite.lineStyle(2, 0x444444);        
        this.sprite.drawRect(0,0,this.width, this.height);
        this.container.addChild(this.sprite);               // push in sprite
        



        this.pointer = new PIXI.Graphics();

        const path = [
            -10, -Game.block_size*2,
             10, -Game.block_size*2,
              0, -Game.block_size*2 - 25,
        ];
        this.pointer.x = this.width/2;
        this.pointer.y = this.height/2;
        this.pointer.lineStyle(0);
        this.pointer.beginFill(0xff0000, 1);
        this.pointer.drawPolygon(path);
        this.pointer.endFill();
        this.container.addChild(this.pointer);
    },





    tick: function () {

        this.input_handle();

        this.hitbox.update();
        for (let i=0; i<this.killZone.length; i++) {
            this.killZone[i].update();
        }
        PositionUpdate(this);
        this.screenX = screen_pos_calc(this.x,this.y)[0];
        this.screenY = screen_pos_calc(this.x,this.y)[1];
        
        this.update_sprite();
    },





    input_handle: function () {

        //jump
        if (moveKey[32]) {
            if (!this.veloy) this.veloy = -20;

        //left
        } 
        if (moveKey[65]) {
            this.velox = -10;
            this.direct = -1;
        //right
        } 
        if (moveKey[68]) {
            this.velox = 10
            this.direct = 1;
        } 
        //left click 
        if (Mouse.button == 0) {

            let changeX = TrigCalculation(Mouse.angle, 50)[0];
            let changeY = TrigCalculation(Mouse.angle, 50)[1];
                    
            this.killZone.push( new KillZone(
                this.x + changeX ,
                this.y + changeY ,
                this.width, this.height, 1, 2, this, this.killZone.length
            )); 
        } 
    },




    update_sprite: function () {
        this.container.x = this.screenX;        // set location
        this.container.y = this.screenY;

        this.pointer.rotation = Mouse.angle;
    },

}