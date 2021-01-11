var Map = {
    
    map: [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    lineMap: [
        [ 0, 0,22, 0],
        [ 0,13,22,13],
        [ 0 ,0, 0,13],
        [22, 0,22,13],
    ],

    container: new PIXI.Container(),

    init: function () {
        app.stage.addChild(this.container);
    },


    update: function (Ox,Oy) {

        this.container.removeChildren(0);       // clear children

        offsetX = - Ox%Game.block_size;
        offsetY = - Oy%Game.block_size;
         
        Ox = Math.floor(Ox/Game.block_size);
        Oy = Math.floor(Oy/Game.block_size);
        
        const half_width  = Math.floor(Game.width/2) + 1;
        const half_height = Math.floor(Game.height/2) + 1;

        for (let y=Oy-half_height; y<Oy+half_height; y++) {
            for (let x=Ox-half_width; x<Ox+half_width; x++) {   // for all visible nodes
    
                //if not outside defined area
                if (y < 0 || x < 0 || x >= this.map[0].length || y >= this.map.length) continue;
    
                switch (this.map[y][x]) {
                    case 1: 
                        const graphic = new PIXI.Graphics();

                        //graphic.x =  (Game.width/2-Ox+x)*Game.block_size + offsetX;
                        //graphic.y = (Game.height/2-Oy+y)*Game.block_size + offsetY;
                        graphic.x = screen_pos_calc(x*Game.block_size, y*Game.block_size)[0];
                        graphic.y = screen_pos_calc(x*Game.block_size, y*Game.block_size)[1];
                        graphic.beginFill(0x000000);    
                        graphic.lineStyle(2, 0x4444444);     // linewidth, color
                        graphic.drawRect(0,0, Game.block_size, Game.block_size);  
                        this.container.addChild(graphic);
                        break;
                }
            }
        }     
    },






    viewMode_init: function () {
        
        this.LOOP = setInterval(Map.viewMode_tick, FRAME_RATE);
    },






    viewMode_tick: function () {
        
        if (moveKey[65]) this.MapViewerX -= 50; 
        if (moveKey[68]) this.MapViewerX += 50; 
        if (moveKey[87]) this.MapViewerY -= 50; 
        if (moveKey[83]) this.MapViewerY += 50; 


        let Ox = this.x;
        let Oy = this.y;

        Map.update(Ox, Oy);
    },




    Generate: function () {

        return;
    }
}