class KillZone {
    constructor (x,y,w,h, damage, life, parent, index, container ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.damage = damage;
        this.parent = parent;

        this.life = 0;
        this.lifeLimit = life;
        this.type = 'killZone';
        this.index = index;



        // simple rect
        this.container = new PIXI.Container();
        this.container.addChild(new PIXI.Graphics());
        this.container.children[0].beginFill(0xff0000);    
        this.container.children[0].lineStyle(2, 0x444444); 
        this.container.children[0].drawRect(0,0,w,h);
        if (!screen_pos_calc(this.x,this.y)[2]) {
            this.container.x = screen_pos_calc(this.x,this.y)[0];
            this.container.y = screen_pos_calc(this.x,this.y)[1];
        } else {
            this.container.alpha = 0;
        }
        app.stage.addChild(this.container);
    }

    update = function () {


        if (!screen_pos_calc(this.x,this.y)[2]) {
            this.container.x = screen_pos_calc(this.x,this.y)[0];
            this.container.y = screen_pos_calc(this.x,this.y)[1];
        } else {
            this.container.alpha = 0;
        }

        // age
        if (this.lifeLimit != -1) {
            this.life++;
            if (this.lifeLimit == this.life) {
                this.container.destroy()
                this.parent.killZone.splice(this.index,1);
            }
        }
    }
}
